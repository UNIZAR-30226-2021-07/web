import React, {useEffect, useState, useContext} from "react";

import CardStack from "./CardStack";
import { SessionContext } from "../SessionProvider";

/**
 * @param cardStacks -> lista de las pilas de cartas posibles en el cuerpo
 * Entre 0 y 4 pilas
 */
function Body({ cardStacks, kind = "body", username }) {
  const [body, setBody] = useState([[null], [null], [null], [null]]);

  const session = useContext(SessionContext);
  if (username == session.userData.name) {
    //console.log(cardStacks);
  }

  useEffect(() => {
    //console.log(cardStacks);
    if (!cardStacks) {
      return;
    } else {
      let newBody = [[], [], [], []];
      // Transform to cardStack format
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
      setBody(newBody);
    }
  }, [cardStacks]);

  return (
    <div className="row mx-0 flex-nowrap" id={`user-${kind}`}>
      {body.map((cards, idx) => (
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
