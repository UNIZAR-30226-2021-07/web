import React, { useState, useContext } from "react";
import { Card, Form, Button, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { loginUser } from "../utils/api";

import { renderErrorPopup } from "./popups/ErrorPopup";

import { SessionContext } from "./SessionProvider";

function Login() {
  const session = useContext(SessionContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response != null) {
        if ("access_token" in response) {
          let token = response.access_token;
          session.setToken(token);
          history.push("/home");
        } else {
          renderErrorPopup(response.error);
        }
      }
    })

    
  };

  return (
    <Container className="app-container col-centered justify-content-center">
      <Card className="w-100">
        <Card.Body>
          <Row className="justify-content-center">
            <Card.Title className="primary-title text-align-center">
              Iniciar Sesión
            </Card.Title>
          </Row>
          <Form className="justify-content-center" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Row className="justify-content-end w-100 mt-4">
              <Button className="primary-button" type="submit">
                Iniciar Sesión
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Container className="mt-5">
        <Row className="justify-content-center secondary-title">
          ¿Nuevo en Gatovid?
        </Row>
        <Row className="justify-content-center">
          <Link to="/signup">
            <Button className="secondary-button">CREAR UNA CUENTA</Button>
          </Link>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
