import React from "react";
import { Card, Form, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  return (
    <Container className="app-container centered">
      <Card>
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
            <Link to="/menu">
              <Button
                className="primary-button"
                onClick={onLogin}
                variant="primary"
                type="submit"
              >
                {" "}
                INICIAR SESIÓN
              </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
      <br></br>
      <br></br>
      <Container>
        <Row className="justify-content-center secondary-title">
          ¿Nuevo en Gatovid?
        </Row>
        <Row className="justify-content-center">
          <Button className="secondary-button">CREAR UNA CUENTA</Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
