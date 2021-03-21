import React from 'react';
import {Card, Container, Form, Row, Button} from 'react-bootstrap'

function SignUp() {
    return(
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Crear una cuenta</Card.Title>
                </Card.Body>
                <Form>
                    <Form.Group controlId="formBasicUser">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">REGISTRARSE</Button>
                </Form>
            </Card>

            <Container>
                <Row className="align-items-center">¿Ya tienes cuenta?</Row>
                <Row className="align-items-center">
                    <Button>INICIAR SESIÓN</Button>
                </Row>
            </Container>
        </Container>
    );
}

export default SignUp;