import React, { useContext, useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

import Card from "./Card";
import { GameContext } from "../GameProvider";

function Hand() {
  const game = useContext(GameContext);
  const [hand, setHand] = useState([]);

  useEffect(() => {
    setHand(game.hand);
  }, [game.hand]);

  return (
    <ListGroup horizontal>
      {hand.map((card, idx) => (
        <Card key={idx} slot={idx} card={card} kind="hand" />
      ))}
    </ListGroup>
  );
}

export default Hand;
