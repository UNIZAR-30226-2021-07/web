import React from "react";
import Card from "./Card";

/**
 * @param
 */
function CardStack({id, cards }) {

  const cardsInStack = cards;
  const stackSize = cards.length;

  const drop = e => {
    e.preventDefault();
    console.log(id);
    console.log(cardsInStack);
    console.log(stackSize);
    // Obtain card_id of card in event e
    const card_id = e.dataTransfer.getData('card_id');

    // Obtain card element with the id
    const card = document.getElementById(card_id);

    card.id = id + '-card-' + stackSize;
    card.className = card.className + ' stackCard stackCard-' + stackSize;
    card.draggable = 'false';
    //card.children[0].setAttribute("className", "body-card");
    card.firstChild.setAttribute("class", "body-card");
    console.log(card.firstChild);
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
        <Card key={idx} id={`${id}-card-${idx}`} className={`stackCard stackCard-${idx}`} 
              number={card.number} type={card.type} draggable="false"/>
      ))}
    </div>
  );
}


export default CardStack;
