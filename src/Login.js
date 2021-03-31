import React from "react";
import { Card, Form, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  return (
    <Container className="app-container d-flex h-100">
      <Row className="justify-content-center align-items-center w-100">
        <Card className="w-100">
          <Card.Body>
            <Row className="justify-content-center">
              <Card.Title className="primary-title text-align-center">
                Iniciar Sesión
              </Card.Title>
            </Row>
            <Form className="justify-content-center">
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
            </Form>
            <Row className="justify-content-end w-100">
              <Link to="/menu">
                <Button
                  className="primary-button"
                  onClick={onLogin}
                  type="submit"
                >
                  Iniciar Sesión
                </Button>
              </Link>
            </Row>
          </Card.Body>
        </Card>
        <Container>
          <Row className="justify-content-center secondary-title">
            ¿Nuevo en Gatovid?
          </Row>
          <Row className="justify-content-center">
            <Link to="/signup">
              <Button className="secondary-button">CREAR UNA CUENTA</Button>
            </Link>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default Login;
