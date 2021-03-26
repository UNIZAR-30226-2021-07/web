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

import camera from "./camera.png";

function EditProfile({ email, username, image, boardType }) {
  return (
    <Container className="app-container">
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>Configuración</h1>
          </Card.Title>
        </Card.Body>
        <Row>
          <Col>
            <Card.Body>
              <Row className="align-items-right justify-content-right">
                <Button variant="outline-info" size="sm">
                  <Image fluid src={camera}></Image>
                </Button>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Card.Img variant="top" src={image}></Card.Img>
              </Row>
              <br></br>
              <Row className="align-items-center justify-content-center">
                <Card.Text>{username}</Card.Text>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Card.Text>{email}</Card.Text>
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
                      <Button variant="outline-info" size="sm">
                        <Image fluid src={boardType}></Image>
                      </Button>
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Col>
        </Row>
        <Card.Body>
          <Row className="align-items-center justify-content-center">
            <Button>GUARDAR</Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EditProfile;