import React from "react";
import { ListGroup } from "react-bootstrap";

import CardStack from "./CardStack";

/**
 * @param cardStacks -> son las pilas de cartas posibles en el cuerpo
 * Entre 0 y 4 pilas
 */
function Body({id, cardStacks }) {

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
    <ListGroup horizontal
      id={id}
      onDrop={drop}
      onDragOver={dragOver}>
      {cardStacks.map((cards, idx) => (
        <CardStack key={idx} cards={cards} />
      ))}
    </ListGroup>
  );
}

export default Body;
