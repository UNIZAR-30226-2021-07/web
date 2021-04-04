import React from "react";
import { ListGroup } from "react-bootstrap";

import Message from "./Message";

function showMessages(messages) {
  if (!messages) {
    return;
  }

  return messages.map((msg, idx) => <Message key={idx} message={msg} />);
}

function MessageList({ messages }) {
  return <ListGroup>{showMessages(messages)}</ListGroup>;
}

export default MessageList;
