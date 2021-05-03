import React, {useContext, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";

import Hand from "./game/Hand";
import Body from "./game/Body";
import PlayerBox from "./game/PlayerBox";

import { GameContext } from "./GameProvider";

function Board() {
  const game = useContext(GameContext);

  useEffect(() => {
    //console.log(game.hand);
    //console.log(game.currentTurn);
    console.log('Numero de jugadores: ' + game.players);
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
    { card_type: "organ", color: "blue" },
    { card_type: "organ", color: "blue" },
  ];

  const Player1 = () => {
    return game.players == 5 || game.players == 6 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player2 = () => {
    return game.players != 2 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player3 = () => {
    return game.players == 2 || game.players == 4 || game.players == 6 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player4 = () => {
    return game.players != 2 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player5 = () => {
    return game.players == 5 || game.players == 6 ? (
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
