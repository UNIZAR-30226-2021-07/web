import React from "react";
import { ListGroup } from "react-bootstrap";
import { Draggable } from 'react-beautiful-dnd';

import Card from "./Card";
/**
 * @param cards -> son las cartas de la mano un jugador
 * Siempre 3 del tipo "hand"
 */
function Hand({ cards }) {
  // TODO: PONER ZONA DE DRAG
  return (
      <ListGroup horizontal>
        {cards.map((card, idx) => {
          return (
            <Draggable key={idx} draggableId={idx} index={idx}>
            {(provided) => {
              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
               <Card number={card.number} type={"hand"} />
              </li>
            }}
            </Draggable>
          )
        }
        )}
      </ListGroup>
  );

}

export default Hand;
