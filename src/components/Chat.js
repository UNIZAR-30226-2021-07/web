import React, { useState } from "react";
import { Button, Image, Container, Row, Form } from "react-bootstrap";

import send from "../assets/common/icons/send.svg";
import MessageList from "./MessageList";

// const URL = ''

function Chat() {

  const [message, setMessage] = useState('');

  // ws = new WebSocket(URL);

  const handleClick = async (e) => {
    e.preventDefault();
    /*
    const response = await logoutUser({
      token,
    });
    */
    /*this.props.onSubmitMessage(this.state.message)*/
    setMessage('')
  };

  return (
    <Container className="chat-container">
      <Row className="chat-header justify-content-center align-items-center">
        <h4>Chat de partida</h4>
      </Row>
      <Row className="message-list px-3">
        <MessageList />
      </Row>
      <Form className="send-message input-group mt-2" onSubmit={handleClick}>
        <input
          type="text"
          className="form-control"
          value={message}
          placeholder="Escribir Mensaje"
          onChange={e => setMessage(e.target.value)}
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
