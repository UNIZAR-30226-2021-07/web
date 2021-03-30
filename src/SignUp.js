import React from "react";
import { Card, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Container className="app-container">
      <Card>
        <Card.Body>
          <Row className="justify-content-center">
            <Card.Title className="primary-title text-align-center">
              Crear una cuenta
            </Card.Title>
          </Row>
          <Form className="justify-content-center">
            <Form.Group controlId="formBasicUser">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Link to="/menu">
              <Button className="primary-button">REGISTRARSE</Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
      <Container>
        <Row className="justify-content-center secondary-title">
          ¿Ya tienes cuenta?
        </Row>
        <Row className="justify-content-center">
          <Link to="/login">
            <Button  className="secondary-button">INICIAR SESIÓN</Button>
          </Link>
        </Row>
      </Container>
    </Container>
  );
}

export default SignUp;
