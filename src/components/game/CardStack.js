import React from "react";
import { ListGroup } from "react-bootstrap";


import Card from "./Card";

/**
 * @param
 */
function CardStack({id, cards }) {

  const drop = e => {
    e.preventDefault();
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
    <ListGroup
      id={id}
      onDrop={drop}
      onDragOver={dragOver}>
      {cards.map((card, idx) => (
          <ListGroup.Item key={idx} className={`stackCard stackCard-${idx}`}>
            <Card key={idx} number={card.number} type={card.type} />
          </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CardStack;
