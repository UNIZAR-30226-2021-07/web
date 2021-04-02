import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Chat from "./Chat";

//Solo para test
const messages = [
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Noooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
];

function Match() {
  return (
    <Container
      className="app-container"
      id="match"
    >
      <Row className="h-100">
        <Col className="md-9">
          <Link to="/">
            <Button>Salir de la partida</Button>
          </Link>
        </Col>
        <Col className="md-3">
          <Chat messages={messages} />
        </Col>
      </Row>
    </Container>
  );
}

export default Match;
