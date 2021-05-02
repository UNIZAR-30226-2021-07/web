import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { SessionContext } from "./SessionProvider";

import Hand from "./game/Hand";
import Body from "./game/Body";
import PlayerBox from "./game/PlayerBox";

/*
const game_update = {
  "finished": false,
  "leaderboard": {
      "manolo22": {
          "position": 1,
          "coins": 50,
      },
  },
  "playtime_mins": 4,
  "current_turn": "manolo22",
  "players": [
      {
          "name": "marcuspkz",
          "picture": 4,
          "board": 2,
      },
      // ...
  ],
  "hand": [
      {"card_type": "organ", "color": "red"},
      {"card_type": "virus", "color": "green"},
      {"card_type": "treatment", "treatment_type": "infection"},
  ],
  "bodies": {
      "marcuspkz": [
          {
              "organ": {
                  "card_type": "organ",
                  "color": "red"
              },
              "modifiers": [
                  {"card_type": "virus", "color": "red"},
              ]
          },
      ],
  },
};*/
/*
const loadHand = (game_update) => {
  console.log('Load hand');
  let hand = game_update.hand[0].card_type
  return hand;
}*/

function Board() {
  const session = useContext(SessionContext);
  console.log(session);

  const numPlayers = 4;

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
    return numPlayers == 5 || numPlayers == 6 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player2 = () => {
    return numPlayers != 2 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player3 = () => {
    return numPlayers == 2 || numPlayers == 4 || numPlayers == 6 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player4 = () => {
    return numPlayers != 2 ? (
      <PlayerBox username="José" photo="0" body={body} />
    ) : null;
  };
  const Player5 = () => {
    return numPlayers == 5 || numPlayers == 6 ? (
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
      <Row className="">
        <Body cardStacks={cardBody} />
      </Row>
      <Row className="">
        <Hand cards={cardsHand} />
      </Row>
    </Container>
  );
}

export default Board;
