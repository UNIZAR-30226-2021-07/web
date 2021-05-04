import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Hand from "./game/Hand";
import Body from "./game/Body";
//import PlayerBox from "./game/PlayerBox";

import { GameContext } from "./GameProvider";

function Board() {
  const game = useContext(GameContext);
  const [numPlayers, setNumPlayers] = useState(0);

  useEffect(() => {
    console.log(numPlayers);
    if(game.players.length > 0) {
      // +1 including user
      setNumPlayers(game.players.length + 1);
    }
  }, [game.players]);

  /*
  const cardsStack = [
    { card_type: "organ", color: "red" },
    { card_type: "virus", color: "green" },
  ];
  */
  /*
  const cardsStack1 = [
    { card_type: "organ", color: "blue" },
    { card_type: "organ", color: "blue" },
  ];
  */

  //const cardBody = [cardsStack, cardsStack, cardsStack, cardsStack];
  //const body = [cardsStack1, cardsStack1, cardsStack1, cardsStack1];

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
  
  const Player1 = () => { return null; };
  const Player2 = () => { return null; };
  const Player3 = () => { return null; };
  const Player4 = () => { return null; };
  const Player5 = () => { return null; };

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
        <Body cardStacks={game.body} />
      </Row> 
      <Row className="justify-content-center">
        <Hand cards={cardsHand} />
      </Row>
    </Container>
  );
}

export default Board;
