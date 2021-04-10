import React, { useEffect, useState } from "react";
import { Button, Image, Container, Row, Form } from "react-bootstrap";

import { getUserData } from "../utils/api";

import MessageList from "./MessageList";

import send from "../assets/common/icons/send.svg";

function Chat({ token, socket }) {
  const [message, setMessage] = useState("");
  const [codeInput, setCodeInput] = useState("");

  // TODO: Hardcodeado provisional para pedir el username
  const [username, setUserName] = useState("");

  useEffect(() => {
    getUserData({ token }).then((response) => {
      if ("error" in response) {
        console.log(response.error);
      } else {
        setUserName(response.name);
      }
    });
  }, []);

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
      {/* TODO: PONER MESSAGES */}
        <MessageList username={username} messages={[]} />
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
