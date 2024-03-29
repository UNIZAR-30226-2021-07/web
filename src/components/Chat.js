import React, { useState, useContext } from "react";
import { Button, Image, Container, Row, Form } from "react-bootstrap";

import MessageList from "./MessageList";

import send from "../assets/common/icons/send.svg";

import { SessionContext } from "./SessionProvider";
import { GameContext } from "./GameProvider";

function Chat() {
  const session = useContext(SessionContext);
  const game = useContext(GameContext);
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message) {
      session.socket.current.emit("chat", message, callback);
    }
    setMessage("");
  };

  function callback(data) {
    if (data && data.error) {
      console.error(data.error);
    }
  }

  return (
    <Container className="chat-container">
      <Row className="chat-header justify-content-center align-items-center">
        <h4>Chat de partida</h4>
      </Row>
      <Row className="message-list px-3">
        <MessageList
          username={session.userData.name}
          messages={game.messages}
        />
      </Row>
      <Form className="send-message input-group mt-2" onSubmit={sendMessage}>
        <input
          type="text"
          className="form-control"
          maxLength="240"
          value={message}
          placeholder="Escribir Mensaje"
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <div className="input-group-append pb-2">
          <Button className="send-button" type="submit">
            <Image src={send} style={{ height: "20px" }} />
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Chat;
