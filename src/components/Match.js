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

function Match() {
  const session = useContext(SessionContext);
  const history = useHistory();

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
    { type: "body", number: "0", draggable: "false" },
    { type: "body", number: "1", draggable: "false" },
  ];
  const cardsStack1 = [
    { type: "rival", number: "3", draggable: "false" },
    { type: "rival", number: "1", draggable: "false" },
    { type: "rival", number: "2", draggable: "false" },
  ];

  const cardBody = [cardsStack, cardsStack, cardsStack, cardsStack];
  const body = [cardsStack1, cardsStack1, cardsStack1, cardsStack1];

  const cardsHand = [
    { id: "card-hand-1", number: "0", draggable: "true" },
    { id: "card-hand-2", number: "1", draggable: "true" },
    { id: "card-hand-3", number: "2", draggable: "true" },
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
          <Body id="body" cardStacks={cardBody} />
          <Hand cards={cardsHand} />
          <Row>
            <Col>
              <PlayerBox username="José" photo="0" body={body} />
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
