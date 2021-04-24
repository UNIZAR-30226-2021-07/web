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
    <Droppable droppableId="cards">
    {(provided) => (
      <ListGroup {...provided.droppableProps} ref={provided.innerRef}>
        {cards.map((card, idx) => (
          <div className="stackCard" key={idx}>
            <Card key={idx} number={card.number} type={card.type} />
          </div>
        ))}
        {provided.placeholder}
      </ListGroup>
    )}
    </Droppable>
  );
}

export default CardStack;
