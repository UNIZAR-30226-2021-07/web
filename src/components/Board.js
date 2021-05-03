import React, {useContext, useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";

import Hand from "./game/Hand";
import Body from "./game/Body";
import PlayerBox from "./game/PlayerBox";

import { GameContext } from "./GameProvider";

function Board() {
  const game = useContext(GameContext);
  const [numRivals, setNumRivals] = useState(game.players.length);

  useEffect(() => {
    setNumRivals(game.players.length);
  }, [game.players]);

  const cardsStack = [
    { card_type: "organ", color: "red" },
    { card_type: "virus", color: "green" },
  ];
  const cardsStack1 = [
    { card_type: "organ", color: "blue" },
    { card_type: "organ", color: "blue" },
  ];

  const cardBody = [cardsStack, cardsStack, cardsStack, cardsStack];
  const body = [cardsStack1, cardsStack1, cardsStack1, cardsStack1];

  const cardsHand = [
    { card_type: "organ", color: "blue" },
    { card_type: "virus", color: "green" },
    { card_type: "treatment", treatment_type: "infection" },
  ];

  const Player1 = () => {
    return numRivals == 4 || numRivals == 5 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player2 = () => {
    return numRivals != 1 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player3 = () => {
    return numRivals == 1 || numRivals == 3 || numRivals == 5 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player4 = () => {
    return numRivals != 1 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player5 = () => {
    return numRivals == 4 || numRivals == 5 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };

  return (
    <Container>
      <Row className="flex-nowrap">
        <Col className="">
          <Player1 />
          <Player2 />
        </Col>
        <Col className="">
          <Player3 />
        </Col>
        <Col className="">
          <Player4 />
          <Player5 />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Body cardStacks={cardBody} />
      </Row>
      <Row className="justify-content-center">
        <Hand cards={cardsHand} />
      </Row>
    </Container>
  );
}

export default Board;
