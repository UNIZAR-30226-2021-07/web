import React from "react";
import { Button, Image, Container, Row } from "react-bootstrap";

import send from "./assets/common/icons/send.svg";

import MessageList from "./MessageList";

function Chat({ messages }) {
  return (
    <Container id="chat" className="px-0 justify-content-space-between">
      <Row
        id="chat-header"
        className="justify-content-center align-items-center"
      >
        <h4>Chat de partida</h4>
      </Row>
      <Row className="p-2">
        <MessageList messages={messages} />
      </Row>
      <Row className="input-group mt-auto ">
        <input
          type="text"
          className="input-chat form-control"
          placeholder="Escribir Mensaje"
        ></input>
        <div className="input-group-append">
          <Button className="send-button">
            <Image src={send} style={{ height: "20px" }} />
          </Button>
        </div>
      </Row>
    </Container>
  );
}

export default Chat;
