import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Hand from "./game/Hand";
import Body from "./game/Body";
//import PlayerBox from "./game/PlayerBox";

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
    }
  }, [game.players]);

  const cardsHand = [
    { card_type: "organ", color: "blue" },
    { card_type: "virus", color: "green" },
    { card_type: "treatment", treatment_type: "infection" },
  ];

  /*
  const Player1 = () => {
    let index = 0;
    return numPlayers > 2 ? (
      <PlayerBox username={game.players[index].name} photo={game.players[index].picture} body={game.bodies[index]} />
    ) : null;
  };
  const Player2 = () => {
    let index = 1;
    return numPlayers == 5 || numPlayers == 6 ? (
      <PlayerBox username={game.players[index].name} photo={game.players[index].picture} body={game.bodies[index]} />
    ) : null;
  };
  const Player3 = () => {
    let index = -1;
    if (numPlayers == 2) index = 0;
    else if (numPlayers == 4) index = 1;
    else if (numPlayers == 6) index = 2;
    return index != -1 ? (
      <PlayerBox username={game.players[index].name} photo={game.players[index].picture} body={game.bodies[index]} />
    ) : null;
  };
  const Player4 = () => {
    let index = -1;
    if (numPlayers == 3) index = 1;
    else if (numPlayers == 4 || numPlayers == 5) index = 2;
    else if (numPlayers == 6) index = 3;
    return index != -1 ? (
      <PlayerBox username={game.players[index].name} photo={game.players[index].picture} body={game.bodies[index]} />
    ) : null;
  };
  const Player5 = () => {
    let index = -1;
    if (numPlayers == 5) index = 3;
    else if (numPlayers == 6) index = 4;
    return index != -1 ? (
      <PlayerBox username={game.players[index].name} photo={game.players[index].picture} body={game.bodies[index]} />
    ) : null;
  };
  */

  const Player1 = () => {
    return null;
  };
  const Player2 = () => {
    return null;
  };
  const Player3 = () => {
    return null;
  };
  const Player4 = () => {
    return null;
  };
  const Player5 = () => {
    return null;
  };


  // function getUserBody (userName) {
  //   // Get the matching body & adapt to corresponding format
  //   console.log(userName);
  //   console.log(game.bodies);
  //   let body = game.bodies[userName];
  //   console.log(body);
    
  //   // Body to return
  //   let auxBody = [[], [], [], []];
  //   body.map((stack, ind) => {
  //     // Treat modifiers as single cards over first card
  //     let newStack = [];
  //     newStack = [...newStack, stack.organ];
  //     stack.modifiers.map((modifier) => {
  //       newStack = [...newStack, modifier];
  //     });
  //     // Update stack with index ind
  //     auxBody[ind] = newStack;
  //   });

  //   return auxBody;
  // }

  console.log(game.bodies);

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
