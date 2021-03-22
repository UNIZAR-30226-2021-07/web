import React from "react";
import { Card, Form, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  return (
    <Container className="app-container">
      <Card>
        <Card.Body>
          <Card.Title>Iniciar Sesión</Card.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recuérdame" />
            </Form.Group>
            <Link to="/menu">
              <Button onClick={onLogin} variant="primary" type="submit">Iniciar sesión</Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
      <Container>
        <Row className="align-items-center">¿Nuevo en Gatovid?</Row>
        <Row className="align-items-center">
          <Button>CREAR UNA CUENTA</Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
