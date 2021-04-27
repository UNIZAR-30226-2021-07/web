import React from "react";
import Card from "./Card";

/**
 * @param
 */
function CardStack({ id, cards, playerKind }) {
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
      playerKind +
      " stack-card-" +
      playerKind +
      "-" +
      stackSize;
    card.draggable = false;
    card.firstChild.setAttribute("class", playerKind + "-card");
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
      className={`stack-base-${playerKind}`}
      onDrop={drop}
      onDragOver={allowDrop}
    >
      {cards.map((card, idx) => (
        <Card
          key={idx}
          id={`${id}-card-${idx}`}
          className={`stack-card-${playerKind} stack-card-${playerKind}-${idx}`}
          number={card.number}
          type={card.type}
          draggable="false"
        />
      ))}
    </div>
  );
}

export default CardStack;
