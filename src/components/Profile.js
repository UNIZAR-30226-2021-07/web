import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { renderErrorPopup } from "./popups/ErrorPopup";
import {logoutUser, getUserStats, getUserData } from "../api"

import profile_pics from "../assets/common/profile_pics.json";

function Profile({ token, setToken }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [games, setGames] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [timePlayed, setTimePlayed] = useState(0);

  useEffect(() => {
    getUserData({ token }).then((response) => {
      if ("error" in response) {
        console.error(response.error);
      } else {
        setUserName(response.name);
        setEmail(response.email);

        //Url a la imagen disponible en la carpeta public
        let pictureURL =
          process.env.PUBLIC_URL + "/" + profile_pics[response.picture].image;
        setPicture(pictureURL);
      }
    });
  }, []);

  useEffect(() => {
    if (username === "") return;

    getUserStats({ username }).then((response) => {
      if ("error" in response) {
        console.error(response.error);
      } else {
        setGames(response.games);
        setWins(response.wins);
        setLosses(response.losses);
        setTimePlayed(response.playtime_mins);
      }
    });
  }, [username]);

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await logoutUser({
      token,
    });

    if ("message" in response) {
      setToken(null);
    } else {
      renderErrorPopup(response.error);
    }
  };

  return (
    <Container
      id="profile"
      className="app-container col-centered justify-content-center"
    >
      <Card className="w-100">
        <Card.Body>
          <Row className="align-items-center justify-content-center">
            <Col>
              <Row className="align-items-center justify-content-center mb-3">
                <Card.Title className="primary-title text-align-center">
                  Mi Perfil
                </Card.Title>
              </Row>
              <Row className="align-items-center justify-content-center mb-2">
                <Image
                  src={picture}
                  className="user-profile-image"
                  roundedCircle
                  thumbnail
                ></Image>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Card.Text>{username}</Card.Text>
              </Row>
              <Row className="align-items-center justify-content-center mb-2">
                <Card.Text>{email}</Card.Text>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Link to="/editProfile">
                  <Button className="tertiary-button">Editar Perfil</Button>
                </Link>
              </Row>
            </Col>
            <Col>
              <Row className="align-items-center justify-content-center">
                <Card.Title className="secondary-title text-align-center">
                  Estadísticas
                </Card.Title>
              </Row>
              <Card.Body className="mx-4 align-items-center justify-content-center">
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>
                        <Card.Title className="tertiary-title">
                          Partidas jugadas:
                        </Card.Title>
                      </td>
                      <td>
                        <Card.Text>{games}</Card.Text>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Card.Title className="tertiary-title">
                          Partidas ganadas:
                        </Card.Title>
                      </td>
                      <td>
                        <Card.Text>{wins}</Card.Text>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Card.Title className="tertiary-title">
                          Partidas perdidas:
                        </Card.Title>
                      </td>
                      <td>
                        <Card.Text>{losses}</Card.Text>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Card.Title className="tertiary-title">
                          Tiempo jugado:
                        </Card.Title>
                      </td>
                      <td>
                        <Card.Text>{timePlayed} min</Card.Text>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Body>
                <Row className="align-items-center justify-content-center">
                  <Button className="alert-button" onClick={handleClick}>
                    Cerrar Sesión
                  </Button>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
