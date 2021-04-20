import React, { useState } from "react";
import { Card, Container, Form, Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { signUpUser } from "../utils/api";

import { renderErrorPopup } from "./popups/ErrorPopup";

function SignUp() {
  const history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Revisa que las contraseñas sean iguales
    if (password != confirmPassword) {
      renderErrorPopup("Las contraseñas no coiciden.");
      return;
    }

    // TODO: PONER ADAPTADO A NUEVO TRATAMIENTO DE ERROR EN API.JS
    const response = await signUpUser({
      name,
      email,
      password,
      setToken: () => {},
    });

    if (response != null) {
      if ("user" in response) {
        history.push("/login");
      } else {
        renderErrorPopup(response.error);
      }
    }
  };

  return (
    <Container className="app-container col-centered justify-content-center">
      <Card className="w-100">
        <Card.Body>
          <Row className="justify-content-center">
            <Card.Title className="primary-title text-align-center">
              Crear una cuenta
            </Card.Title>
          </Row>
          <Form className="justify-content-center" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUser">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
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
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {password != confirmPassword && confirmPassword !== undefined && (
                <div className="text-danger">Las contraseñas no coinciden</div>
              )}
            </Form.Group>
            <Row className="justify-content-end w-100 mt-4">
              <Button className="primary-button" type="submit">
                Registrarse
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Container className="mt-5">
        <Row className="justify-content-center secondary-title">
          ¿Ya tienes cuenta?
        </Row>
        <Row className="justify-content-center">
          <Link to="/login">
            <Button className="secondary-button">INICIAR SESIÓN</Button>
          </Link>
        </Row>
      </Container>
    </Container>
  );
}

export default SignUp;
