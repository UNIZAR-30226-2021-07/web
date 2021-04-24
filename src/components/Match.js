import React, { useContext, useEffect } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Chat from "./Chat";
import CardStack from "./game/CardStack";
import Hand from "./game/Hand";

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
    { type: "hand", number: "0" },
    { type: "hand", number: "1" },
  ];
  // F: Pruebas Hand
  const cardsHand = [{ number: "0" }, { number: "1" }, { number: "2" }];

  return (
    <Row className="m-0">
      <Col>
        <Container className="app-container">
          <Row className="w-100 justify-content-between no-wrap">
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
            <CardStack cards={cards} />
            <Hand cards={cards} />
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
