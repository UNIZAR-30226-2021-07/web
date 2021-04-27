import React from "react";
import Card from "./Card";

/**
 * @param
 */
function CardStack({ id, cards }) {
  //const cardsStack = cards;
  var stackSize = cards.length;

  const dropHandler = (e) => {
    e.preventDefault();
    if (stackSize >= 3) return;

    // Obtain card_id of card in event e
    const card_id = e.dataTransfer.getData("card_id");

    // Obtain card element with the id
    const card = document.getElementById(card_id);
    // Convert hand-car to body-card in the selected CardStack
    card.id = id + "-card-" + stackSize;
    card.className = card.className + " stack-card stack-card-" + stackSize;
    card.draggable = "false";
    card.firstChild.setAttribute("class", "rival-card");

    // To set the card in the stack
    stackSize = stackSize + 1;
    document.getElementById(id).appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={id}
      className="stack-base"
      onDrop={dropHandler}
      onDragOver={dragOver}
    >
      {cards.map((card, idx) => (
        <Card
          key={idx}
          id={`${id}-card-${idx}`}
          className={`stack-card stack-card-${idx}`}
          number={card.number}
          type={card.type}
          draggable="false"
        />
      ))}
    </div>
  );
}

export default CardStack;
