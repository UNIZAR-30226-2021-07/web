import React from "react";
import Card from "./Card";

/**
 * @param
 */
function CardStack({ id, cards, kind }) {
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

    console.log(card.draggable);
    console.log(id);

    // Convert hand-car to body-card or rival-card in the selected CardStack
    card.id = id + "-card-" + stackSize;

    card.className =
      card.className +
      " stack-card-" +
      kind +
      " stack-card-" +
      kind +
      "-" +
      stackSize;
    card.draggable = false;
    card.firstChild.setAttribute("class", kind + "-card");
    // Change img child id
    card.firstChild.setAttribute("id", id + "-card-" + stackSize + "-img");
    // To set the card in the stack
    stackSize = stackSize + 1;

    document.getElementById(id).appendChild(card);
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
