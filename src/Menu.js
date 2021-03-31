import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import logo from "./assets/common/logo/logo.svg";
import shop from "./assets/common/icons/tienda.svg";
import user from "./assets/common/icons/perfil.svg";
import coins from "./assets/common/icons/huella.svg";

import { renderCreateGamePopup } from "./CreateGamePopup";
import { renderJoinGamePopup } from "./JoinGamePopup";
import { renderPreparingGamePopup } from "./PreparingGamePopup";

function Menu() {
  return (
    <Container className="app-container menu-container">
      <Row>
        <Col className="col-md-2">
          <Image src={user} alt="Perfil" className="menu-icon mx-auto d-block" />
        </Col>
        <Col className="col-md-2 offset-md-8 justify-content-center align-items-center">
          <Row className="">
            <Image src={shop} alt="Tienda" className="menu-icon mx-auto d-block" />
          </Row>
          <Row className="justify-content-center align-items-center">
            <span id="number-coins">100</span>
            <Image id="coins" src={coins} alt="Tienda" className="" />
          </Row>
        </Col>
      </Row>
      <Row className="logo-row justify-content-center align-items-center">
        <Image id="logo" className="menu-logo img-fluid" src={logo} alt="logo" />
        <h1 id="logo-title">GATOVID</h1>
      </Row>
      <Row className="">
        <Col lg={true}>
          <Button
            className="primary-button d-block mx-auto"
            onClick={() => renderCreateGamePopup("1234")}
          >
            CREAR PARTIDA PRIVADA
        </Button>
        </Col>
        <Col lg={true}>
          <Button
            className="primary-button d-block mx-auto"
            onClick={() => renderJoinGamePopup()}
          >
            UNIRSE PARTIDA PRIVADA
        </Button>
        </Col>
        <Col lg={true}>
          <Button
            className="primary-button d-block mx-auto"
            onClick={() => renderPreparingGamePopup()}
          >
            UNIRSE PARTIDA PÚBLICA
        </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
