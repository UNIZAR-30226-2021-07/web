import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Chat from "./Chat";

function Match({ token }) {
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
        <Chat token={token} className="" />
      </Col>
    </Row>
  );
}

export default Match;
