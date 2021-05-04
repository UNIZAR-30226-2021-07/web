import React, { useContext } from "react";

import Card from "./Card";
import { playCard } from "../WebSockets";

import { SessionContext } from "../SessionProvider";

function CardStack({ id, cards, kind }) {
  const session = useContext(SessionContext);
  var stackSize = cards.length;

  const drop = (e) => {
    e.preventDefault();

    if (stackSize >= 3) return;

    // Obtain card_id of card in event e
    const card_id = e.dataTransfer.getData("card_id");

    if (!card_id) {
      return;
    }

    // Obtain card element with the id
    const card = document.getElementById(card_id);

    console.log(id);
    console.log(card.id);

    const data = {
      slot: 1,
      target: "test_user2",
      organ_pile: 1,
    };

    playCard(session.socket, data);
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
