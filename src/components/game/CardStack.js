import React from "react";
import { ListGroup } from "react-bootstrap";


import Card from "./Card";

/**
 * @param
 */
function CardStack({ cards }) {
  // TODO: PONER ZONA DE DROP
  return (
    <ListGroup>
      {cards.map((card, idx) => (
          <ListGroup.Item key={idx} className={`stackCard stackCard-${idx}`}>
            <Card key={idx} number={card.number} type={card.type} />
          </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CardStack;
