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

//import { Link } from "react-router-dom";

import camera from "./assets/common/icons/camera.png";

import { renderDeleteAccountPopup } from "./DeleteAccountPopup";


function EditProfile({ email, username, image, boardType }) {
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
                  <Row className="align-items-right justify-content-right">
                    <Button variant="outline-info" size="sm">
                      <Image fluid src={camera}></Image>
                    </Button>
                  </Row>
                  <Row className="align-items-center justify-content-center mb-2">
                      <Image src={image} className="user-profile-image" roundedCircle thumbnail ></Image>
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
                    <Form>
                      <Card.Text className="text-muted">
                        Editar Configuración de Usuario
                      </Card.Text>
                      <Form.Group controlId="formBasicUser">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control type="text" placeholder="Nuevo nombre" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Cambiar contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Nueva contraseña"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicBoardType">
                        <Form.Row>
                          <Col xs={8}>
                            <Form.Label>Cambiar Tablero</Form.Label>
                          </Col>
                          <Col>
                              <Image id="imgCambioTablero" style={{"height": "40px", "width": "40px", "border": "1px solid",
                                               "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)"}} 
                                      rounded src={boardType}>
                              </Image>
                          </Col>
                        </Form.Row>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                  <Card.Body>
                    <Row className="align-items-center justify-content-center">
                      <Button className="primary-button">GUARDAR</Button>
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
