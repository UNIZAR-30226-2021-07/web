import React/*, { useContext }*/ from "react";

import Card from "./Card";
//import { playCard } from "../WebSockets";

//import { SessionContext } from "../SessionProvider";

function CardStack({ id, cards, kind }) {
  //const session = useContext(SessionContext);

  const drop = (e) => {
    e.preventDefault();

    // Obtain card_id of card in event e
    const slot = e.dataTransfer.getData("slot");
    console.log(slot);

    if (!slot) {
      return;
    }

    const data = {
      slot: 1,
      target: "test_user2",
      organ_pile: 1,
    };
    
    console.log(id);
    console.log(data);
    //playCard(session.socket, data);
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
