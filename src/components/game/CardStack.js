import React from "react";
import Card from "./Card";

/**
 * @param
 */
function CardStack({id, cards }) {

  const drop = e => {
    e.preventDefault();
    console.log(id);
    // Obtain card_id of card in event e
    const card_id = e.dataTransfer.getData('card_id');

    // Obtain card element with the id
    const card = document.getElementById(card_id);
    card.style.display = 'block';

    // To set the card in other place
    e.target.appendChild(card);
  }

  const dragOver = e => {
    e.preventDefault();
  }

  return (
    <div
      id={id}
      className="stackBase"
      onDrop={drop}
      onDragOver={dragOver}>
      {cards.map((card, idx) => (
          <div key={idx} className={`stackCard stackCard-${idx}`} >
            <Card key={idx} number={card.number} type={card.type} />
          </div>
      ))}
    </div>
  );
}

export default CardStack;
