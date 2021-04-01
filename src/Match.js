import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Chat from "./Chat";

function Match() {
  return (
    <Container className="app-container" id="match">
      <Row className="align-content-center">
        <Col>
        <Link to="/">
          <Button>Salir de la partida</Button>
        </Link>
        </Col>
        <Col>
          <Chat/>
        </Col>
      </Row>
    </Container>
  );
}

export default Match;
