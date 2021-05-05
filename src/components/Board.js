import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Timer from "./Timer";

import Hand from "./game/Hand";
import Body from "./game/Body";
import PlayerBox from "./game/PlayerBox";

import { GameContext } from "./GameProvider";
import { SessionContext } from "./SessionProvider";

function Board() {
  const session = useContext(SessionContext);
  const game = useContext(GameContext);
  const [numRivals, setNumRivals] = useState(0);

  useEffect(() => {
    if (game.players.length > 0) {
      setNumRivals(game.players.length);
    }
    return () => {
      setNumRivals(0);
    };
  }, [game.players]);

  const Player1 = () => {
    let index = 2;
    return numRivals == 5 || numRivals == 6 ? (
      <PlayerBox
        username={game.players[index].name}
        photo={game.players[index].picture}
        body={game.bodies[game.players[index].name]}
      />
    ) : null;
  };

  const Player2 = () => {
    let index = 1;
    return numRivals > 2 ? (
      <PlayerBox
        username={game.players[index].name}
        photo={game.players[index].picture}
        body={game.bodies[game.players[index].name]}
      />
    ) : null;
  };

  const Player3 = () => {
    let index = -1;
    if (numRivals == 2) index = 1;
    else if (numRivals == 4) index = 2;
    else if (numRivals == 6) index = 3;
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
    if (numRivals == 3) index = 2;
    else if (numRivals == 4 || numRivals == 5) index = 3;
    else if (numRivals == 6) index = 4;
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
    if (numRivals == 5) index = 4;
    else if (numRivals == 6) index = 5;
    return index != -1 ? (
      <PlayerBox
        username={game.players[index].name}
        photo={game.players[index].picture}
        body={game.bodies[game.players[index].name]}
      />
    ) : null;
  };

  console.log(game.bodies[session.userData.name]);

  return (
    <Container className="mx-0 p-0">
      <Row>
        <Col className="">
          <Player2 />
          <Player1 />
        </Col>
        <Col className="justify-content-center">
          <Player3 />
          <Timer />
        </Col>
        <Col className="">
          <Player4 />
          <Player5 />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Body cardStacks={game.bodies[session.userData.name]} username={session.userData.name} />
      </Row>
      <Row className="justify-content-center">
        <Hand />
      </Row>
    </Container>
  );
}

export default Board;
