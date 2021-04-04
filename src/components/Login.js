import React, { useState } from "react";
import { Card, Form, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { renderErrorPopup } from "./popups/ErrorPopup";



async function loginUser({ email, password }) {

  let data = new URLSearchParams();
  data.append(`email`, email);
  data.append(`password`, password);

  console.log(data);

  const requestOptions = {
    method: 'POST',
    body: data,
  };

  return fetch('https://gatovid.herokuapp.com/data/login', requestOptions)
    .then(data => data.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

function Login({ setToken }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });

    if ("access_token" in response) {
      setToken(response.access_token);
    } else {
      renderErrorPopup(response.error);
    }


  }

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
              <Form.Control type="email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Row className="justify-content-end w-100 mt-4">
              <Button
                className="primary-button"
                type="submit">
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
