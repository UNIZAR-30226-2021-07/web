import React, { useContext } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Chat from "./Chat";
import { SessionContext } from "./SessionProvider";

function Match() {
  const session = useContext(SessionContext);
  const history = useHistory();

  const leaveGame = async (e) => {
    e.preventDefault();
      session.socket.current.emit("leave", callback);
  };

  function callback(data) {
    if (data && data.error) {
      console.error(data.error);
    } else {
      history.push("/home");
    }
  }

  return (
    <Row className="m-0">
      <Col>
        <Container className="app-container">
          <Row className="h-100">
            <Col className="md-9">
                <Button onClick={leaveGame}>Salir de la partida</Button>
            </Col>
            <Col className="md-3"></Col>
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
