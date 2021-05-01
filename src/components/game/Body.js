import React from "react";

import CardStack from "./CardStack";

/**
 * @param cardStacks -> son las pilas de cartas posibles en el cuerpo
 * Entre 0 y 4 pilas
 */
function Body({ cardStacks, kind = "body" }) {
  return (
    <div className="row mx-0" id={`user-${kind}`}>
      {cardStacks.map((cards, idx) => (
        <CardStack
          id={`${kind}-stack-${idx}`}
          key={idx}
          cards={cards}
          kind={kind}
        />
      ))}
    </div>
  );
}

export default Body;
