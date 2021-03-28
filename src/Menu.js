import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import logo from "./logo.svg";

import { renderCreateGamePopup } from './CreateGamePopup';
import { renderJoinGamePopup } from "./JoinGamePopup";
import { renderPreparingGamePopup } from "./PreparingGamePopup";

function Menu() {
  return (
    <Container className="app-container">
      <Row>
        <Col md={4}>Perfil</Col>
        <Col md={{ span: 4, offset: 4 }}>Tienda</Col>
      </Row>

      <Row className="align-items-center">
        <Col>
          <Image className="py-5" src={logo} alt="logo" fluid />
        </Col>
        <Col>
          <h1>GATOVID</h1>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Button onClick={() => renderCreateGamePopup("1234")}>Crear partida privada</Button>
        </Col>
        <Col md={4}>
          <Button onClick={() => renderJoinGamePopup()}>
            Unirse partida privada
          </Button>
        </Col>
        <Col md={4}>
          <Button onClick={() => renderPreparingGamePopup()}>
            Unirse partida pública
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
