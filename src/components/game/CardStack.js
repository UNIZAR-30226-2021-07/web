import React from "react";
import { ListGroup } from "react-bootstrap";


import Card from "./Card";

/**
 * @param
 */
function CardStack({ cards }) {
  // TODO: PONER ZONA DE DROP
  return (
    <ListGroup className="stackBase">
      {cards.map((card, idx) => (
          <div key={idx} className={`stackCard stackCard-${idx}`}>
          <Card key={idx} number={card.number} type={card.type} />
          </div>
      ))}
    </ListGroup>
  );
}

export default CardStack;
