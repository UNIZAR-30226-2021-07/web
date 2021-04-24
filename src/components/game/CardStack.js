import React from "react";
import { ListGroup } from "react-bootstrap";
import { Droppable } from 'react-beautiful-dnd';


import Card from "./Card";

/**
 * @param
 */
function CardStack({ cards }) {
  // TODO: PONER ZONA DE DROP
  return (
    <ListGroup>
      {cards.map((card, idx) => (
        <div className="stack-card" key={idx}>
          <Card key={idx} number={card.number} type={card.type} />
        </div>
      ))}
    </ListGroup>
  );
}

export default CardStack;
