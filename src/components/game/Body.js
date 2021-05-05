import React from "react";

import CardStack from "./CardStack";

/**
 * @param cardStacks -> lista de las pilas de cartas posibles en el cuerpo
 * Entre 0 y 4 pilas
 */
function Body({ cardStacks, kind = "body", username }) {
  if (!cardStacks) {
    return null;
  }
  // Transform to cardStack format
  let newBody = [[], [], [], []];
  cardStacks.map((stack, ind) => {
    // Treat modifiers as single cards over first card
    let newStack = [];
    newStack = [...newStack, stack.organ];
    stack.modifiers.map((modifier) => {
      newStack = [...newStack, modifier];
    });
    // Update stack with index ind
    newBody[ind] = newStack;
  });

  return (
    <div className="row mx-0 flex-nowrap" id={`user-${kind}`}>
      {newBody.map((cards, idx) => (
        <CardStack
          id={`${kind}-stack-${idx}`}
          key={idx}
          cards={cards}
          kind={kind}
          organ_pile={idx}
          username={username}
        />
      ))}
    </div>
  );
}

export default Body;
