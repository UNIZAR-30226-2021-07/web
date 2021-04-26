import React from "react";

import CardStack from "./CardStack";

/**
 * @param cardStacks -> son las pilas de cartas posibles en el cuerpo
 * Entre 0 y 4 pilas
 */
function Body({id, cardStacks }) {

  return (
    <div
      className="row"
      id={id}>
      {cardStacks.map((cards, idx) => (
          <CardStack id={`stack-${idx}`} key={idx} cards={cards} />
      ))}
    </div>
  );
}

export default Body;
