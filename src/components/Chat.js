import React, { useState, useEffect } from "react";
import { Button, Image, Container, Row, Form } from "react-bootstrap";

import send from "../assets/common/icons/send.svg";
import MessageList from "./MessageList";


import io from 'socket.io-client';


// const URL = ''


function setupWebsockets(login_data) {
  fetch('http://localhost:81/data/login', {
    method: 'POST',
    body: login_data,
  })
  .then(response => response.json())
  .then(data => {
      if(data['error']) {
          console.error('Error:', data['error']);
          return;
      }

      let token = data['access_token'];
      console.log(token);
      setup_socketio(token);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function setup_socketio(token) {

  var socket = io.connect("ws://localhost:81", {
          extraHeaders: {
              Authorization: "Bearer " + token,
          }
  });

  socket.on('connect', function() {
      console.log('connected')
  });
}

function start_game(token) {

  var socket = io.connect("ws://localhost:81", {
          extraHeaders: {
              Authorization: "Bearer " + token,
          }
  });

  socket.on('connect', function() {
      console.log('connected')
  });
}


function Chat() {

  const [message, setMessage] = useState('');


  useEffect(() => {
    let data = new URLSearchParams();
    data.append(`email`, `test_user1@gmail.com`);
    data.append(`password`, `whatever1`);
    setupWebsockets(data);
  });

  const handleClick = async (e) => {
    e.preventDefault();
    /*
    const response = await logoutUser({
      token,
    });
    */
    /*this.props.onSubmitMessage(this.state.message)*/
    MessageList.newMessage(message);
    setMessage('');

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
        <form id="form" action="">
      <input id="input" autoComplete="off" /><button>Send</button>
    </form>
    <button id="create-room" onClick={start_game}>Create room</button>
    <button id="start-game">Start game</button>
    <button id="leave-room">Leave room</button>
    <form id="join-room-form" action="">
      <input id="code-input" autoComplete="off" /><button>Join room</button>
    </form>
    </Container>
  );
}

export default Chat;
