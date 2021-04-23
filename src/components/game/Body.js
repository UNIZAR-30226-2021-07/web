import React from "react";
import { ListGroup } from "react-bootstrap";

import CardStack from "./CardStack";

/**
 * @param cardStacks -> son las pilas de cartas posibles en el cuerpo
 * Entre 0 y 4 pilas 
 */
function Body({ cardStacks }) {
  return (
    <ListGroup horizontal>
      {cardStacks.map((cards, idx) => (
          <CardStack key={idx} cards={cards} />
      ))}
    </ListGroup>
  );
}

export default Body;