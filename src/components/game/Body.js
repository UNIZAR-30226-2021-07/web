import React, { useContext, useState, useEffect } from "react";

import CardStack from "./CardStack";
import { GameContext } from "../GameProvider";

/**
 * @param cardStacks -> son las pilas de cartas posibles en el cuerpo
 * Entre 0 y 4 pilas
 */
function Body({ kind = "body" }) {
  const game = useContext(GameContext);
  const [body, setBody] = useState([]);

  useEffect(() => {
    setBody(game.body);
  }, [game.body]);
  return (
    <div className="row mx-0 flex-nowrap" id={`user-${kind}`}>
      {body.map((cards, idx) => (
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
