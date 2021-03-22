import React from 'react';

import { Container, Button, Row} from 'react-bootstrap';

function Chat({messages}){
    return(
        <Container>
            <Container>
                <h4>Chat de partida</h4>
            </Container>
            <Container>{messages}</Container>
            <Container>
                <Row >
                    <input placeholder="Escribir Mensaje"></input>
                    <Button>Send</Button>
                </Row>
            </Container>          
        </Container>

    );
}

export default Chat;