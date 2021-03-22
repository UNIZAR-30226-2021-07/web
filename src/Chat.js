import React from 'react';
import { Container, Button, Row, Col, InputGroup } from 'react-bootstrap';

function Mensaje({userid, text}) {
    return(
        <Row className="align-items-center">
            <Col md={2}>{userid}: </Col>
            <Col md={10}>{text}</Col>
        </Row>
    )
}

function Chat(){
    return(
        <Container>
            <Container>
                <h1>Chat de partida</h1>
            </Container>
            <Container>
                <Mensaje userid="Nombre 1"text="Mensaje 1"/>
                <Mensaje userid="Nombre 2" text="Mensaje 2"/>
                <Mensaje userid="Nombre 3" text="Mensaje 4"/>
            </Container>
            <Container>
                <Row>
                    <Col>
                    <input type="email" class="form-control" border-color="red" placeholder="Escribir Mensaje"></input>
                    </Col>
                    <Col>
                        <Button>Send</Button>
                    </Col>
                </Row>
            </Container>          
        </Container>

    );
}

export default Chat;