import React, { useEffect, useState } from "react";
import { Button, Image, Container, Row, Form } from "react-bootstrap";

import send from "../assets/common/icons/send.svg";
import MessageList from "./MessageList";

import useWebSocket from "./websockets";


// TODO: Provisional para pedir el username
async function getUserData({ token }) {
  const requestOptions = {
    method: "POST",
    headers: { Authorization: "Bearer " + token },
  };

  return fetch("https://gatovid.herokuapp.com/data/user_data", requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

function Chat({ token }) {
  const [message, setMessage] = useState("");
  const [codeInput, setCodeInput] = useState("");
  // TODO: Hardcodeado provisional para pedir el username
  const [username, setUserName] = useState("");

  const { socket, messages } = useWebSocket({
    url: "ws://gatovid.herokuapp.com",
    token: token,
  });


  useEffect(() => {
    getUserData({ token }).then((response) => {
      if ("error" in response) {
        console.log(response.error);
      } else {
        setUserName(response.name);
      }
    });
  }, []);

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
        <MessageList username={username} messages={messages}/>
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
