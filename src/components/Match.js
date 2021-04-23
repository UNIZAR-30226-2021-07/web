import React, { useContext, useEffect } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Chat from "./Chat";
import Card from "./game/Card";
import { SessionContext } from "./SessionProvider";

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

  return (
    <Row className="m-0">
      <Col>
        <Container className="app-container">
          <Row className="h-100">
            <Col className="md-9">
              <Button onClick={leaveGame}>Salir de la partida</Button>
            </Col>
            <Col className="md-3"></Col>
            <Card type="hand" number="0"/>
            <Card type="body" number="1" />
            <Card type="rival" number="3" />
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
