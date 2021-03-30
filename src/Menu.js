import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import logo from "./assets/common/logo/logo.svg";
import shop from "./assets/common/icons/tienda.svg";
import user from "./assets/common/icons/perfil.svg";

import { renderCreateGamePopup } from "./CreateGamePopup";
import { renderJoinGamePopup } from "./JoinGamePopup";
import { renderPreparingGamePopup } from "./PreparingGamePopup";

function Menu() {
  return (
    <Container className="app-container">
      <Row className="icons">
        <Image src={user} alt="Perfil" />
        <Image src={shop} alt="Tienda" />
      </Row>
      <Row className="main">
        <Col>
          <Image id="logo" className src={logo} alt="logo" />
        </Col>
        <Col>
          <h1 id="main-title">GATOVID</h1>
        </Col>
      </Row>
      <Row className="menu-buttons">
        <Button
          className="primary-button"
          onClick={() => renderCreateGamePopup("1234")}
        >
          CREAR PARTIDA PRIVADA
        </Button>
        <Button
          className="primary-button"
          onClick={() => renderJoinGamePopup()}
        >
          UNIRSE PARTIDA PRIVADA
        </Button>
        <Button
          className="primary-button"
          onClick={() => renderPreparingGamePopup()}
        >
          UNIRSE PARTIDA PÚBLICA
        </Button>
      </Row>
    </Container>
  );
}

export default Menu;
