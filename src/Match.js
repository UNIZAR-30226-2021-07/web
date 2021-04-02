import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Chat from "./Chat";

//Solo para test
const messages = [
  {
    userid: "Nombre 1",
    text: "Mensaje 1",
  },
  {
    userid: "Nombre 2",
    text: "Mensaje 2 eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  },
  {
    userid: "Nombre 3",
    text: "Mensaje 3",
  },
  {
    userid: "Nombre 1",
    text: "Mensaje 1",
  },
  {
    userid: "Nombre 2",
    text: "Mensaje 2 eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  },
  {
    userid: "Nombre 3",
    text: "Mensaje 3",
  },
  {
    userid: "Nombre 1",
    text: "Mensaje 1",
  },
  {
    userid: "Nombre 2",
    text: "Mensaje 2 eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  },
  {
    userid: "Nombre 3",
    text: "Mensaje 3",
  },
  {
    userid: "Nombre 3",
    text: "Mensaje 3",
  }
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
