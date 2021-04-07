import React, { useRef, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

import Message from "./Message";




function MessageList({ messages }) {
  // TODO: Se inicializa a algo para ver el scroll
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  // useEffect se ejecuta / se dispara cuando ocurre un cambio en messages
  // (condición/guarda entre []), al hacerlo ejecuta la f. scrollToBottom 
  useEffect(scrollToBottom, [messages]);

  return <ListGroup>
    {messages.map((msg, idx) => <Message key={idx} message={msg} />)}
    <div ref={messagesEndRef} />
  </ListGroup>;
}

export default MessageList;
