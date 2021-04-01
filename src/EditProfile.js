import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Image,
} from "react-bootstrap";

import boardType from "./assets/common/boards/green.png";
import image from "./assets/common/logo/logo.svg";

//import { Link } from "react-router-dom";

import camera from "./assets/common/icons/camera.svg";

import { renderDeleteAccountPopup } from "./DeleteAccountPopup";


function EditProfile(/*{ email, username, image , boardType }*/) {

  // TODO: Solo para prototipo inicial
  var username = "Juan Carlos";
  var email = "juanCarlos@gmail.com";

  return (
    <Container id="editProfile" className="app-container">
      <Card>
        <Card.Body>
            <Row className="align-items-center justify-content-center">
                <Col>
                  <Row className="align-items-center justify-content-center mb-3">
                    <Card.Title className="primary-title text-align-center">
                          Configuración
                    </Card.Title>
                  </Row>
                  <Row id="btnImageChange" className="align-items-center justify-content-center mb-2"
                    style={{"position": "relative"}}>
                    <Button className="primary-button">
                      <Image src={camera} fluid></Image>
                    </Button>
                    <Image src={image} className="user-profile-image mt-3" roundedCircle thumbnail ></Image> 
                  </Row>
                  <Row className="align-items-center justify-content-center">
                    <Card.Text>{username}</Card.Text>
                  </Row>
                  <Row className="align-items-center justify-content-center mb-2">
                    <Card.Text>{email}</Card.Text>
                  </Row>
                  <Card.Body>
                    <Row className="align-items-center justify-content-center">
                      <Button className="alert-button" onClick={renderDeleteAccountPopup}>
                        Eliminar Cuenta
                      </Button>
                    </Row>
                  </Card.Body>
               </Col>
                <Col>
                  <Card.Body>
                    <Form className="align-items-center justify-content-center">
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
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicBoardType">
                        <Form.Row className="align-items-center justify-content-center mt-4 flex-nowrap">
                          <Col md={4}>
                            <Form.Label>Cambiar Tablero</Form.Label>
                          </Col>
                          <Col id="imgCambioTablero">
                              <Image rounded src={boardType}>
                              </Image>
                          </Col>
                        </Form.Row>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                  <Card.Body>
                    <Row className="align-items-center justify-content-center">
                      <Button className="primary-button" style={{"width": "40vh"}}>GUARDAR</Button>
                    </Row>
                  </Card.Body>
              </Col>
            </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EditProfile;
