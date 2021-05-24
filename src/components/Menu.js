import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PopupboxManager } from "react-popupbox";

import { Container, Row, Col, Button, Image } from "react-bootstrap";

import { renderCreateGamePopup } from "./popups/CreateGamePopup";
import { renderJoinPrivateGamePopup } from "./popups/JoinPrivateGamePopup";
import { renderJoinPublicGamePopup } from "./popups/JoinPublicGamePopup";
import { renderErrorPopup } from "./popups/ErrorPopup";
import { getUserData } from "../utils/api";

import logo from "../assets/common/logo/logo.svg";
import shop from "../assets/common/icons/tienda.svg";
import coins from "../assets/common/icons/huella.svg";
import help from "../assets/common/icons/help.svg";

import { getProfile } from "../utils/json";

import { SessionContext } from "./SessionProvider";
import { GameContext } from "./GameProvider";

function Menu() {
  const session = useContext(SessionContext);
  const game = useContext(GameContext);
  const history = useHistory();
  const [picture, setPicture] = useState("");
  const [numCoins, setNumCoins] = useState(0);

  useEffect(() => {
    session.setOnMatch(false);
    // Update del socket
    // F: Así se consigue que se limpien los datos del gameProvider
    session.setUpdateSocket((session.updateSocket + 1) % 2);
  }, []);

  useEffect(() => {
    if (session.userData.length === 0) return;

    const pictureURL = getProfile(session.userData.picture);
    setPicture(pictureURL);
    setNumCoins(session.userData.coins);
  }, [session.userData.picture, session.userData.coins]);

  useEffect(() => {
    getUserData(session).then((response) => {
      if (response != null) {
        if ("error" in response) {
          console.error(response.error);
        } else {
          session.setUserData({
            email: response.email,
            name: response.name,
            coins: response.coins,
            picture: response.picture,
            board: response.board,
            purchases: response.purchases,
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    if (!session.socket || !session.socket.current) return;
    session.socket.current.once("start_game", (response) => {
      if (response && response.error) {
        renderErrorPopup(response.error);
      } else {
        PopupboxManager.close();
        session.setOnMatch(true);
        history.push("/match");
        session.socket.current.off("game_owner");
      }
    });

    session.socket.current.once("game_cancelled", () => {
      PopupboxManager.close();
    });
  }, [session.socketChange]);

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
                    <span className="mr-2">{numCoins}</span>
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
            onClick={() => renderJoinPublicGamePopup(session, game, history)}
          >
            UNIRSE PARTIDA PÚBLICA
          </Button>
        </Col>
      </Row>
      <Link to="/help">
        <Image src={help} className="game-icon pause-menu" />
      </Link>
    </Container>
  );
}

export default Menu;
