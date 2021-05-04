import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Hand from "./game/Hand";
import Body from "./game/Body";
import PlayerBox from "./game/PlayerBox";

import { GameContext } from "./GameProvider";
import { SessionContext } from "./SessionProvider";

function Board() {
  const session = useContext(SessionContext);
  const game = useContext(GameContext);
  const [numPlayers, setNumPlayers] = useState(0);

  useEffect(() => {
    console.log(numPlayers);
    if (game.players.length > 0) {
      setNumPlayers(game.players.length);
    }
    return () => {
      setNumPlayers(0);
    };
  }, [game.players]);

  const cardsHand = [
    { card_type: "organ", color: "blue" },
    { card_type: "virus", color: "green" },
    { card_type: "treatment", treatment_type: "infection" },
  ];

  const Player1 = () => {
    let index = 1;
    return numPlayers > 2 ? (
      <PlayerBox
        username={game.players[index].name}
        photo={game.players[index].picture}
        body={game.bodies[game.players[index].name]}
      />
    ) : null;
  };
  const Player2 = () => {
    let index = 2;
    return numPlayers == 5 || numPlayers == 6 ? (
      <PlayerBox
        username={game.players[index].name}
        photo={game.players[index].picture}
        body={game.bodies[game.players[index].name]}
      />
    ) : null;
  };
  const Player3 = () => {
    let index = -1;
    if (numPlayers == 2) index = 1;
    else if (numPlayers == 4) index = 2;
    else if (numPlayers == 6) index = 3;
    return index != -1 ? (
      <PlayerBox
        username={game.players[index].name}
        photo={game.players[index].picture}
        body={game.bodies[game.players[index].name]}
      />
    ) : null;
  };
  const Player4 = () => {
    let index = -1;
    if (numPlayers == 3) index = 2;
    else if (numPlayers == 4 || numPlayers == 5) index = 3;
    else if (numPlayers == 6) index = 4;
    return index != -1 ? (
      <PlayerBox
        username={game.players[index].name}
        photo={game.players[index].picture}
        body={game.bodies[game.players[index].name]}
      />
    ) : null;
  };
  const Player5 = () => {
    let index = -1;
    if (numPlayers == 5) index = 4;
    else if (numPlayers == 6) index = 5;
    return index != -1 ? (
      <PlayerBox
        username={game.players[index].name}
        photo={game.players[index].picture}
        body={game.bodies[game.players[index].name]}
      />
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
        <Body cardStacks={game.bodies[session.userData.name]} />
      </Row>
      <Row className="justify-content-center">
        <Hand cards={cardsHand} />
      </Row>
    </Container>
  );
}

export default Board;
