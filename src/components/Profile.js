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

import logo from "../assets/common/logo/logo.svg";

async function logoutUser({ token }) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return fetch("https://gatovid.herokuapp.com/data/logout", requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

// async function getUserStats({ token }) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Authorization": "Bearer" + token },
//   };

//   return fetch("https://gatovid.herokuapp.com/data/user_stats", requestOptions)
//     .then((data) => data.json())
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

async function getUserData({ token }) {
  const requestOptions = {
    method: "POST",
    headers: { Authorization: "Bearer " + token },
  };

  return fetch("https://gatovid.herokuapp.com/data/user_data", requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

function Profile({ token, setToken }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  // const [games, setGames] = useState(0);
  // const [wins, setWins] = useState(0);
  // const [losts, setLosts] = useState(0);
  // const [timePlayed, setTimePlayed] = useState(0);

  const games = 0;
  const wins = 0;
  const losts = 0;
  const timePlayed = 0;

  useEffect(() => {
    getUserData({token})
    .then(response => {
      if ("error" in response) {
        renderErrorPopup(response.error);
      } else {
        setUserName(response.name);
        setEmail(response.email);
        console.log("Usuario: " + response.name);
        console.log("Email: " + response.email);
      }
    });
  }, [])

  const handleSubmit = async (e) => {
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
                  src={logo}
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
                        <Card.Text>{losts}</Card.Text>
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
                  <Button className="alert-button" onClick={handleSubmit}>
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
