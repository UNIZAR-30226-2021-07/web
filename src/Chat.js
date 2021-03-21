import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

function Chat(){
    return(
        <Container  className="app-container">
            <h1>Chat</h1>
            <Container>
                <Row className="align-items-center">
                    <Col md={2}>Nombre</Col>
                    <Col md={10}>Mensaje</Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={2}>Nombre2</Col>
                    <Col md={10}>Mensaje2</Col>
                </Row>
            </Container>
            <Container>
                <Row className="align-items-center">
                    <Col md={4}>Input Message</Col>
                    <Col md={6}>
                        <Button>Send</Button>
                    </Col>
                </Row>
                
            </Container>          
        </Container>

    );
}

export default Chat;