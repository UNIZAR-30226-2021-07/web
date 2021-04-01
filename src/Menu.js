import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import { Link } from "react-router-dom";

import logo from "./assets/common/logo/logo.svg";
import shop from "./assets/common/icons/tienda.svg";
import user from "./assets/common/icons/perfil.svg";
import coins from "./assets/common/icons/huella.svg";

import { renderCreateGamePopup } from "./CreateGamePopup";
import { renderJoinGamePopup } from "./JoinGamePopup";
import { renderPreparingGamePopup } from "./PreparingGamePopup";

function Menu() {
  return (
    <Container id="menu" className="app-container col-centered justify-content-around">
      <Row className="align-items-center">
        <Col className="menu-icon">
          <Link className="d-block h-100" to="/profile">
            <Image
              src={user}
              alt="Perfil"
              className="mx-auto h-100"
            />
          </Link>
        </Col>
        <Link
          to="/shop"
          className="offset-md-8 justify-content-center align-items-center menu-icon menu-icon-shop"
        >
          <Image
            src={shop}
            alt="Tienda"
            className="mx-auto h-100"
          />
          <Row className="justify-content-center align-items-center flex-nowrap coins">
            <span id="number-coins" className="mr-2">100</span>
            <Image src={coins} alt="Tienda" />
          </Row>
        </Link>
      </Row>
      <Row className="logo-row justify-content-center align-items-center">
        <Image
          id="logo"
          className="menu-logo img-fluid"
          src={logo}
          alt="logo"
        />
        <h1 className="logo-title ml-4">GATOVID</h1>
      </Row>
      <Row className="align-items-center">
        <Col lg={true}>
          <Button
            className="primary-button d-block mx-auto m-2"
            onClick={() => renderCreateGamePopup("1234")}
          >
            CREAR PARTIDA PRIVADA
          </Button>
        </Col>
        <Col lg={true}>
          <Button
            className="primary-button d-block mx-auto m-2"
            onClick={renderJoinGamePopup}
          >
            UNIRSE PARTIDA PRIVADA
          </Button>
        </Col>
        <Col lg={true}>
          <Button
            className="primary-button d-block mx-auto m-2"
            onClick={renderPreparingGamePopup}
          >
            UNIRSE PARTIDA PÚBLICA
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
