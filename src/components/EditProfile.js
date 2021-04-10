import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Image,
} from "react-bootstrap";

import { renderDeleteAccountPopup } from "./popups/DeleteAccountPopup";
import { renderErrorPopup } from "./popups/ErrorPopup";

import camera from "../assets/common/icons/camera.svg";
import profile_pics from "../assets/common/profile_pics.json";
import boards from "../assets/common/boards.json";

function EditProfile({ token, setToken, userData }) {

  const [picture, setPicture] = useState("");
  const [board, setBoard] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    // Url to the image available in "public" directory
    let pictureURL =
      process.env.PUBLIC_URL + "/" + profile_pics[userData.picture].image;
    setPicture(pictureURL);
    console.log(pictureURL);
  }, [userData.picture]);

  useEffect(() => {
    console.log(userData);
    // Url to the image available in "public" directory
    let boardURL =
      process.env.PUBLIC_URL + "/" + boards[userData.board].image;
    setBoard(boardURL);
    console.log(boardURL);
  }, [userData.board]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password != confirmPassword) {
      renderErrorPopup("Las contraseñas no coiciden.");
      return;
    }
  };

  return (
    <Container
      id="editProfile"
      className="app-container col-centered justify-content-center"
    >
      <Card>
        <Card.Body>
          <Row className="align-items-center justify-content-center">
            <Col>
              <Row className="align-items-center justify-content-center mb-3">
                <Card.Title className="primary-title text-align-center">
                  Configuración
                </Card.Title>
              </Row>
              <Row
                id="btnImageChange"
                className="align-items-center justify-content-center mb-2"
                style={{ position: "relative" }}
              >
                <Button className="primary-button">
                  <Image src={camera} fluid></Image>
                </Button>
                <Image
                  src={picture}
                  className="user-profile-image mt-3"
                  roundedCircle
                  thumbnail
                ></Image>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Card.Text>{userData.name}</Card.Text>
              </Row>
              <Row className="align-items-center justify-content-center mb-2">
                <Card.Text>{userData.email}</Card.Text>
              </Row>
              <Card.Body>
                <Row className="align-items-center justify-content-center">
                  <Button
                    className="alert-button"
                    onClick={() =>
                      renderDeleteAccountPopup({ token, setToken })
                    }
                  >
                    Eliminar Cuenta
                  </Button>
                </Row>
              </Card.Body>
            </Col>
            <Col>
              <Card.Body>
                <Form
                  className="align-items-center justify-content-center "
                  onSubmit={handleSubmit}
                >
                  Editar Configuración de Usuario
                  <Form.Group controlId="formBasicUser" className="mb-3 mt-3">
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Nuevo nombre" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Cambiar contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nueva contraseña"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nueva contraseña"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {password != confirmPassword &&
                      confirmPassword !== undefined && (
                        <div className="text-danger">
                          Las contraseñas no coinciden
                        </div>
                      )}
                  </Form.Group>
                  <Form.Group controlId="formBasicBoardType">
                    <Form.Row className="align-items-center justify-content-center mt-4 flex-nowrap">
                      <Col md={4}>
                        <Form.Label>Cambiar Tablero</Form.Label>
                      </Col>
                      <Col id="imgCambioTablero">
                        <Image rounded src={board}></Image>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Row className="align-items-center justify-content-center">
                    <Button
                      className="primary-button"
                      type="submit"
                      style={{ width: "40vh" }}
                    >
                      GUARDAR
                    </Button>
                  </Row>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EditProfile;
