import React from "react";
import { ListGroup } from "react-bootstrap";
import Card from "./Card";

function Mano({id, cards}) {


  const drop = e => {
    //e.preventDefault();
    // Obtain card_id of card in event e

    const card_id = e.dataTransfer.getData('card_id');

    // Obtain card element with the id
    const card = document.getElementById(card_id);
    card.style.display = 'block';

    // To set the card in other place
    e.target.appendChild(card);
  }


  return (
    <ListGroup horizontal
      id={id}
      onDrop={drop}
      >
       {cards.map((card, idx) => (
          <Card key={idx} id={card.id} number={card.number} type="hand" draggable={card.draggable} />
        ))}
    </ListGroup>
  )
}

export default Mano