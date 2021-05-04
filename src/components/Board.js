import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Hand from "./game/Hand";
import Body from "./game/Body";
import PlayerBox from "./game/PlayerBox";

import { GameContext } from "./GameProvider";

function Board() {
  const game = useContext(GameContext);

  useEffect(() => {
    console.log(game.players);
  }, [game.players]);

  const cardsStack = [
    { card_type: "organ", color: "red" },
    { card_type: "virus", color: "green" },
  ];
  /*
  const cardsStack1 = [
    { card_type: "organ", color: "blue" },
    { card_type: "organ", color: "blue" },
  ];
  */

  const cardBody = [cardsStack, cardsStack, cardsStack, cardsStack];
  //const body = [cardsStack1, cardsStack1, cardsStack1, cardsStack1];

  const cardsHand = [
    { card_type: "organ", color: "blue" },
    { card_type: "virus", color: "green" },
    { card_type: "treatment", treatment_type: "infection" },
  ];

  const Player1 = () => {
    let index = 0;
    return game.players != 2 ? (
      <PlayerBox username={game.players[index].name} photo={game.players[index].board} body={game.bodies[index]} />
    ) : null;
  };
  const Player2 = () => {
    let index = 1;
    return game.players == 5 || game.players == 6 ? (
      <PlayerBox username={game.players[index].name} photo={game.players[index].board} body={game.bodies[index]} />
    ) : null;
  };
  const Player3 = () => {
    let index = -1;
    if (game.players == 2) index = 0;
    else if (game.players == 4) index = 1;
    else if (game.players == 6) index = 2;
    return index != -1 ? (
      <PlayerBox username={game.players[index].name} photo={game.players[index].board} body={game.bodies[index]} />
    ) : null;
  };
  const Player4 = () => {
    let index = -1;
    if (game.players == 3) index = 1;
    else if (game.players == 4 || game.players == 5) index = 2;
    else if (game.players == 6) index = 3;
    return index != -1 ? (
      <PlayerBox username={game.players[index].name} photo={game.players[index].board} body={game.bodies[index]} />
    ) : null;
  };
  const Player5 = () => {
    let index = -1;
    if (game.players == 5) index = 3;
    else if (game.players == 6) index = 4;
    return index != -1 ? (
      <PlayerBox username={game.players[index].name} photo={game.players[index].board} body={game.bodies[index]} />
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
