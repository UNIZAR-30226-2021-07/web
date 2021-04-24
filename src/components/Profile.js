import React, { useState, useEffect, useContext } from "react";
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

import { logoutUser, getUserStats } from "../utils/api";

import { renderErrorPopup } from "./popups/ErrorPopup";

import profile_pics from "../assets/common/profile_pics.json";

import { SessionContext } from "./SessionProvider";

function Profile() {
  const session = useContext(SessionContext);

  const [picture, setPicture] = useState("");
  const [games, setGames] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [timePlayed, setTimePlayed] = useState(0);

  useEffect(() => {
    if (session.userData.length === 0) return;

    // Url to the image available in "public" directory
    let pictureURL =
      process.env.PUBLIC_URL +
      "/" +
      profile_pics[session.userData.picture].image;
    setPicture(pictureURL);
  }, [session.userData.picture]);

  useEffect(() => {
    if (!session.userData.name) return;

    // Get user stats
    let username = session.userData.name;
    getUserStats({ username, setToken: session.setToken }).then((response) => {
      if (response != null) {
        if ("error" in response) {
          console.error(response.error);
        } else {
          setGames(response.games);
          setWins(response.wins);
          setLosses(response.losses);
          setTimePlayed(response.playtime_mins);
        }
      }
    });
  }, [session.userData.name]);

  const handleClick = async (e) => {
    e.preventDefault();

    const response = await logoutUser(session);
    if (response != null) {
      if ("message" in response) {
        session.setToken(null);
        // Clean user data
        session.setUserData([]);
      } else {
        renderErrorPopup(response.error);
      }
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
                <Card.Text>{session.userData.name}</Card.Text>
              </Row>
              <Row className="align-items-center justify-content-center mb-2">
                <Card.Text>{session.userData.email}</Card.Text>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Link to="/editProfile">
                  <Button className="primary-button">Editar Perfil</Button>
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
