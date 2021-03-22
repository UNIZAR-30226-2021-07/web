import React from "react";
import { Container, Button, Row } from "react-bootstrap";

import MessageList from "./MessageList";

function Chat({ messages }) {
  return (
    <Container>
      <Container>
        <h4>Chat de partida</h4>
      </Container>
      <Container>
        <MessageList messages={messages} />
      </Container>
      <Container>
        <Row>
          <input placeholder="Escribir Mensaje"></input>
          <Button>Send</Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Chat;
