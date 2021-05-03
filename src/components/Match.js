import React, { useContext, useEffect } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Chat from "./Chat";
import Hand from "./game/Hand";

import Body from "./game/Body";
import PlayerBox from "./game/PlayerBox";

import { renderPausePopup } from "./popups/PausePopup";
import { SessionContext } from "./SessionProvider";

import pause from "../assets/common/icons/pause.svg";
import exit from "../assets/common/icons/logout.svg";
import help from "../assets/common/icons/help.svg";
import { GameContext } from "./GameProvider";
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

function Match() {
  const session = useContext(SessionContext);
  const game = useContext(GameContext);
  const history = useHistory();

  useEffect(() => {
    //console.log(game.hand);
    //console.log(game.currentTurn);
    console.log(game.players);
  }, [game.players]);

  useEffect(() => {
    // If socket null, (e.g. when disconnected) go back to menu
    if (!session.socket.current) {
      session.setUpdateSocket((session.updateSocket + 1) % 2);
      history.push("/home");
    }
  }, []);

  const leaveGame = async (e) => {
    e.preventDefault();
    session.socket.current.emit("leave", (data) => {
      if (data && data.error) {
        console.error(data.error);
      } else {
        // When leaving, change updateSocket to get a new socket
        session.setUpdateSocket((session.updateSocket + 1) % 2);
        history.push("/home");
      }
    });
  };

  // ---------------------------------------------------------------------------

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

  return (
    <Row className="m-0">
      <Col>
        <Container className="app-container">
          <Row className="w-100 justify-content-between no-wrap mb-4">
            <Image src={exit} className="game-icon" onClick={leaveGame} />
            <Image
              src={pause}
              className="game-icon"
              onClick={renderPausePopup}
            />
            <Image
              src={help}
              className="game-icon"
              onClick={() => {
                alert("Help");
              }}
            />
          </Row>
          <Row>
            <Col>
              <PlayerBox username="José" photo="0" body={body} />
              <Body cardStacks={cardBody} />
              <Hand cards={cardsHand} />
            </Col>
          </Row>
        </Container>
      </Col>
      <Col className="p-0">
        <Chat />
      </Col>
    </Row>
  );
}

export default Match;
