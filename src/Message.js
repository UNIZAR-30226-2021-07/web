import React from "react";
import { ListGroup } from "react-bootstrap";

function Message({ message }) {
  return (
    <ListGroup.Item className="message mt-3">
      <strong>{message.userid}:</strong> {message.text}
    </ListGroup.Item>
  );
}

export default Message;
