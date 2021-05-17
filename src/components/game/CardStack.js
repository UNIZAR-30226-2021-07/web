import React, { useContext } from "react";

import Card from "./Card";
import { playCard } from "../WebSockets";

import { SessionContext } from "../SessionProvider";
import { GameContext } from "../GameProvider";

function CardStack({ id, cards, kind, organ_pile, username }) {
  const session = useContext(SessionContext);
  const { transplantData, setTransplantData } = useContext(GameContext);

  const drop = (e) => {
    e.preventDefault();

    // Obtain card_id of card in event e
    let slot = e.dataTransfer.getData("slot");
    if (!slot) {
      return;
    }
    slot = parseInt(slot);
    const treatment_type = e.dataTransfer.getData("treatment_type");

    let data = {
      slot: slot,
    };

    console.log(treatment_type);
    if (treatment_type == "undefined") {
      // Organ, virus, medicine
      data["organ_pile"] = organ_pile;
      data["target"] = username;
    } else if (treatment_type == "transplant") {
      // Check for previous transplant data
      if (transplantData["target1"] == undefined) {
        // No previous data -> first player on transplant
        let aux = {};
        aux["target1"] = username;
        aux["organ_pile1"] = organ_pile;
        setTransplantData(aux);
        // No play_card
        return;
      } else {
        // Previous player -> second player on transplant
        data["target1"] = transplantData["target1"];
        data["organ_pile1"] = transplantData["organ_pile1"];
        data["target2"] = username;
        data["organ_pile2"] = organ_pile;
      }
    } else if (treatment_type == "organ_thief") {
      data["target"] = username;
      data["organ_pile"] = organ_pile;
    } else if (treatment_type == "medical_error") {
      data["target"] = username;
    }

    playCard(session, data);
    setTransplantData({});
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={id}
      className={`stack-base-${kind}`}
      onDrop={drop}
      onDragOver={allowDrop}
    >
      {cards.map((card, idx) => (
        <Card
          key={idx}
          id={`${id}-card-${idx}`}
          className={`stack-card-${kind} stack-card-${kind}-${idx}`}
          card={card}
          kind={kind}
        />
      ))}
    </div>
  );
}

export default CardStack;
