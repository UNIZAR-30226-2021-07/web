import React, { useState } from "react";
import { Button, Image, Container, Row, Form } from "react-bootstrap";

import send from "../assets/common/icons/send.svg";
import MessageList from "./MessageList";

import useWebSocket from "./websockets";

function Chat({ token }) {
  const [message, setMessage] = useState("");
  const [codeInput, setCodeInput] = useState("");

  const { socket, messages } = useWebSocket({
    url: "ws://localhost:81",
    token: token,
  });

  const createGame = async (e) => {
    e.preventDefault();
    socket.current.emit("create_game", callback);
  };

  const startGame = async (e) => {
    e.preventDefault();
    socket.current.emit("start_game", callback);
  };

  const joinGame = async (e) => {
    e.preventDefault();
    if (codeInput) {
      console.log(codeInput);
      socket.current.emit("join", codeInput, callback);
      setCodeInput();
    }
  };

  function callback(data) {
    if (data && data.error) {
      console.error(data.error);
    }
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message) {
      socket.current.emit("chat", message, callback);
    }
    setMessage("");
  };

  return (
    <Container className="chat-container">
      <Row className="chat-header justify-content-center align-items-center">
        <h4>Chat de partida</h4>
      </Row>
      <Row className="message-list px-3">
        <MessageList messages={messages} />
      </Row>
      <Form className="send-message input-group mt-2" onSubmit={sendMessage}>
        <input
          type="text"
          className="form-control"
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
      <form id="form" action="">
        <input id="input" autoComplete="off" />
        <button>Send</button>
      </form>
      <button id="create-room" onClick={createGame}>
        Create room
      </button>
      <button id="start-game" onClick={startGame}>
        Start game
      </button>
      <button id="leave-room">Leave room</button>
      <form id="join-room-form" onSubmit={joinGame}>
        <input
          id="code-input"
          autoComplete="off"
          onChange={(e) => setCodeInput(e.target.value)}
        />
        <button>Join room</button>
      </form>
    </Container>
  );
}

export default Chat;
