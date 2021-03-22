import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import logo from "./logo.svg";

function EditProfile(props) {
  return (
    <Container className="app-container">
      <Card>
        <Card.Body>
          <Card.Title>Configuración</Card.Title>
        </Card.Body>
        <Row>
          <Col>
            <Card.Body>
              <Row className="align-items-center justify-content-center">
                <Card.Img variant="top" src={logo}></Card.Img>
              </Row>
              <br></br>
              <Row className="align-items-center justify-content-center">
                <Card.Text>{props.username}</Card.Text>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Card.Text>{props.email}</Card.Text>
              </Row>
            </Card.Body>
          </Col>
          <Col>
            <Card.Title>
              <Row className="align-items-center justify-content-center">
                <Card.Text>Editar Configuración de Usuario</Card.Text>
              </Row>
            </Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicUser">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control type="text" 
                            placeholder="Nuevo nombre"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Cambiar contraseña</Form.Label>
                        <Form.Control type="password"
                        placeholder="Nueva contraseña"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicBoardType">
                        <Form.Label>Cambiar Tablero</Form.Label>
                        <Form.Control
                            type="boardType"/>
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
