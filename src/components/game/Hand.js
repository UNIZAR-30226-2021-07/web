import React from "react";
import { ListGroup } from "react-bootstrap";

import Card from "./Card";
/**
 * @param cards -> son las cartas de la mano un jugador
 * Siempre 3 del tipo "hand"
 */
function Hand({ cards }) {
  return (
    <ListGroup horizontal>
      {cards.map((card, idx) => (
        <Card
          key={idx}
          id={card.id}
          number={card.number}
          type="hand"
          draggable={card.draggable}
        />
      ))}
    </ListGroup>
  );
}

export default Hand;
