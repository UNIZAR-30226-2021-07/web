import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { renderDeleteAccountPopup } from "./popups/DeleteAccountPopup";
import { renderErrorPopup } from "./popups/ErrorPopup";
import { getUserData, modifyUser } from "../utils/api";

import camera from "../assets/common/icons/camera.svg";
import profile_pics from "../assets/common/profile_pics.json";
import boards from "../assets/common/boards.json";

import { SessionContext } from "./SessionProvider";

function EditProfile() {
  const session = useContext(SessionContext);

  const [pictureURL, setPictureURL] = useState("");
  const [boardURL, setBoardURL] = useState("");
  const [picture, setPicture] = useState(session.userData.picture);
  const [board, setBoard] = useState(session.userData.board);
  const [newUserName, setNewUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    if (session.userData.length === 0) return;

    // Url to the image available in "public" directory
    setPictureURL(
      process.env.PUBLIC_URL +
        "/" +
        profile_pics[session.userData.picture].image
    );
  }, [session.userData.picture]);

  useEffect(() => {
    if (session.userData.length === 0) return;

    // Url to the board available in "public" directory
    setBoardURL(
      process.env.PUBLIC_URL + "/" + boards[session.userData.board].image
    );
    console.log(boardURL);
  }, [session.userData.board]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password != confirmPassword) {
      renderErrorPopup("Las contraseñas no coiciden.");
      return;
    } else {
      // Update user configuration calling API function
      let data = new URLSearchParams();
      if (newUserName && newUserName !== "") data.append(`name`, newUserName);
      if (password && password !== "") data.append(`password`, password);

      // TODO -> Da error de no comprado!?
      /*
      data.append(`board`, board);
      data.append(`picture`, picture);
      */

      const response = await modifyUser({ token: session.token, data });

      console.log(response);
      if ("error" in response) {
        renderErrorPopup(response.error);
      } else {
        console.log("Datos actualizados correctamente");
        // Update local user_data as server has just updated
        getUserData(session).then((response) => {
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
        });
      }
    }
  };

  const changePicture = async (e) => {
    e.preventDefault();
    setPicture(picture + 1);
  };

  const changeBoard = async (e) => {
    e.preventDefault();
    setBoard(board + 1);
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
                <Link to="/shop">
                  <Button className="primary-button">
                    <Image src={camera} fluid></Image>
                  </Button>
                </Link>
                <Image
                  src={pictureURL}
                  className="user-profile-image mt-3"
                  roundedCircle
                  thumbnail
                  onClick={changePicture}
                ></Image>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Card.Text>{session.userData.name}</Card.Text>
              </Row>
              <Row className="align-items-center justify-content-center mb-2">
                <Card.Text>{session.userData.email}</Card.Text>
              </Row>
              <Card.Body>
                <Row className="align-items-center justify-content-center">
                  <Button
                    className="alert-button"
                    onClick={() => renderDeleteAccountPopup(session)}
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
                    <Form.Control
                      type="text"
                      placeholder="Nuevo nombre"
                      onChange={(e) => setNewUserName(e.target.value)}
                    />
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
                        <Link to="/shop">
                          <Image
                            rounded
                            src={boardURL}
                            onClick={changeBoard}
                            alt="Tablero"
                          ></Image>
                        </Link>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Row className="align-items-center justify-content-center">
                    <Link to="/profile">
                      <Button
                        className="primary-button"
                        type="submit"
                        style={{ width: "40vh" }}
                      >
                        GUARDAR
                      </Button>
                    </Link>
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
