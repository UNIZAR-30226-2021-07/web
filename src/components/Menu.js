import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { renderCreateGamePopup } from "./popups/CreateGamePopup";
import { renderJoinPrivateGamePopup } from "./popups/JoinPrivateGamePopup";
import { renderJoinPublicGamePopup } from "./popups/JoinPublicGamePopup";

import logo from "../assets/common/logo/logo.svg";
import shop from "../assets/common/icons/tienda.svg";
import coins from "../assets/common/icons/huella.svg";

import { getProfile } from "../utils/json";

import { SessionContext } from "./SessionProvider";
import { leaveGame } from "./WebSockets";

function Menu() {
  const session = useContext(SessionContext);
  const history = useHistory();
  const [picture, setPicture] = useState("");

  useEffect(() => {
    // Prevents going to match if user is not in a match
    session.setOnMatch(false);

    if (!session.socket.current) return;
    leaveGame(session);
  }, []);

  useEffect(() => {
    if (session.userData.length === 0) return;

    const pictureURL = getProfile(session.userData.picture);
    setPicture(pictureURL);
  }, [session.userData.picture]);

  return (
    <Container
      id="menu"
      className="app-container col-centered justify-content-around"
    >
      <Row className="justify-content-between menu-icons">
        <Col className="h-100">
          <Link to="/profile" className="d-block h-100">
            <Image
              src={picture}
              alt="Perfil"
              className="menu-icon user-profile-image"
              roundedCircle
            />
          </Link>
        </Col>
        <Col className="h-100">
          <Link to="/shop" className="d-block h-100 url-style-disabled">
            <Row className="justify-content-end h-100">
              <div className="menu-icon">
                <Col className="h-100">
                  <Row className="h-100">
                    <Image src={shop} alt="Tienda" className="h-100" />
                  </Row>
                  <Row className="coins justify-content-center align-items-center">
                    <span id="number-coins" className="mr-2">
                      {session.userData.coins}
                    </span>
                    <Image src={coins} alt="Tienda" />
                  </Row>
                </Col>
              </div>
            </Row>
          </Link>
        </Col>
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
            onClick={() => renderCreateGamePopup(session)}
          >
            CREAR PARTIDA PRIVADA
          </Button>
        </Col>
        <Col lg={true}>
          <Button
            className="primary-button d-block mx-auto m-2"
            onClick={() => renderJoinPrivateGamePopup(session)}
          >
            UNIRSE PARTIDA PRIVADA
          </Button>
        </Col>
        <Col lg={true}>
          <Button
            className="primary-button d-block mx-auto m-2"
            onClick={() => renderJoinPublicGamePopup(session, history)}
          >
            UNIRSE PARTIDA PÚBLICA
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
