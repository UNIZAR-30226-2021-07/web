import React from "react";

import CardStack from "./CardStack";

/**
 * @param cardStacks -> son las pilas de cartas posibles en el cuerpo
 * Entre 0 y 4 pilas
 */
function Body({ id, cardStacks, playerKind }) {
  return (
    <div className="row mx-0" id={id}>
      {cardStacks.map((cards, idx) => (
        <CardStack id={`${id}-stack-${idx}`} key={idx} cards={cards} playerKind={playerKind} />
      ))}
    </div>
  );
}

export default Body;
