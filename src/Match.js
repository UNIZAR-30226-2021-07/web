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
    text:
      "Nooooooooooooooooooooooooooooooooooooo ooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
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
    <Row className="m-0">
      <Col>
        <Container className="app-container">
          <Row className="h-100">
            <Col className="md-9">
              <Link to="/">
                <Button>Salir de la partida</Button>
              </Link>
            </Col>
            <Col className="md-3"></Col>
          </Row>
        </Container>
      </Col>
      <Col className="p-0">
        <Chat className="" messages={messages} />
      </Col>
    </Row>
  );
}

export default Match;
