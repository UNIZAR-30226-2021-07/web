import React from "react";
import { ListGroup } from "react-bootstrap";

function Message({ username, message }) {
  if (username == message.userid) {
    return (
      <ListGroup.Item className="own-message mt-1 mb-2">
        <strong>{message.userid}:</strong> {message.text}
      </ListGroup.Item>
    );
  } else if ("[GATOVID]" == message.userid) {
    return (
      <ListGroup.Item className="gatovid-message mt-1 mb-2">
        {message.text}
      </ListGroup.Item>
    );
  } else {
    return (
      <ListGroup.Item className="message mt-1 mb-2">
        <strong>{message.userid}:</strong> {message.text}
      </ListGroup.Item>
    );
  }
}

export default Message;
