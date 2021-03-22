import React from "react";
import { ListGroup } from "react-bootstrap";

function Message({ message }) {
  return (
    <ListGroup.Item>
      {message.userid}: {message.text}
    </ListGroup.Item>
  );
}

export default Message;
