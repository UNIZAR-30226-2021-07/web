import React from "react";
import { ListGroup } from "react-bootstrap";

import Card from "./Card";
/**
 * @param cards -> son las cartas de la mano un jugador
 * Siempre 3
 */
function Hand({ cards }) {
  return (
    <ListGroup horizontal>
      {cards.map((card, idx) => (
        <Card key={idx} number={card.number} type={card.type} />
      ))}
    </ListGroup>
  );
}

export default Hand;
