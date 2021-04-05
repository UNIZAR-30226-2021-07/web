import React from "react";
import { ListGroup } from "react-bootstrap";

import Message from "./Message";

//Solo para test
const messages = [
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text:
      "Nooooooooooooooooooooooooooooooooooooo ooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
  {
    userid: "Nombre",
    text: "Mensaje",
  },
];

function showMessages() {
  if (!messages) {
    return;
  }

  return messages.map((msg, idx) => <Message key={idx} message={msg} />);
}

function MessageList() {
  return <ListGroup>{showMessages(messages)}</ListGroup>;
}

export default MessageList;
