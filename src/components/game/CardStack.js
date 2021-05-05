import React, { useContext } from "react";

import Card from "./Card";
import { playCard } from "../WebSockets";

import { SessionContext } from "../SessionProvider";

function CardStack({ id, cards, kind, organ_pile, username }) {
  const session = useContext(SessionContext);

  const drop = (e) => {
    e.preventDefault();

    // Obtain card_id of card in event e
    const slot = e.dataTransfer.getData("slot");
    const treatment_type = e.dataTransfer.getData("treatment_type");

    if (!slot) {
      return;
    }

    let data = {
      slot: slot,
    };

    if (treatment_type == "undefined") {
      // Organ, virus, medicine
      data["organ_pile"] = organ_pile;
      data["target"] = username;
    } else if (treatment_type == "transplant") {
      // TODO: Eleccin del segundo usuario
      data["targets"] = [username, username];
      alert("Transplante");
    } else if (treatment_type == "organ_thief") {
      data["target"] = username;
    } else if (treatment_type == "infection") {
      // TODO:
      alert("Infection");
    } else if (treatment_type == "latex_glove") {
      // TODO:
      alert("Latex_glove");
    } else if (treatment_type == "medical_error") {
      data["target"] = username;
    }
    console.log(data);
    playCard(session, data);
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
