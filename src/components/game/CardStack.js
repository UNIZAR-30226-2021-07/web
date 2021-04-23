import React from "react";
import { ListGroup } from "react-bootstrap";

import Card from "./Card"

/**
 * @param 
 */
function CardStack({ cards }) {


  return (
    <ListGroup>
    {cards.map((card, idx) => (
        <div className="stackCard" key={idx}>
            <Card key={idx} number={card.number} type={card.type} />
        </div>
      ))}
    </ListGroup>

  );
}

export default CardStack;
