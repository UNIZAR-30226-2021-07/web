import React from "react";
import { Button, Image, Container, Row } from "react-bootstrap";

import send from "../assets/common/icons/send.svg";

import MessageList from "./MessageList";

function Chat() {



  return (
    <Container className="chat-container">
      <Row className="chat-header justify-content-center align-items-center">
        <h4>Chat de partida</h4>
      </Row>
      <Row className="message-list px-3">
        <MessageList  />
      </Row>
      <Row className="send-message input-group mt-2">
        <input
          type="text"
          className="form-control"
          placeholder="Escribir Mensaje"
        ></input>
        <div className="input-group-append pb-2">
          <Button className="send-button">
            <Image src={send} style={{ height: "20px" }} />
          </Button>
        </div>
      </Row>
    </Container>
  );
}

export default Chat;
