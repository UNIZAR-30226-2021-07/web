import React, {useState, useEffect, useContext} from "react";
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
        <Card key={idx} id={`card-hand-${idx}`} card={card} kind="hand" />
      ))}
    </ListGroup>
  );
}

export default Hand;
