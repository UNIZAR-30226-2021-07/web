import React, { useState, useRef, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

import Message from "./Message";

//Solo para test
const initMessages = [
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




function MessageList() {
  // TODO: Se inicializa a algo para ver el scroll
  const [messages/*, setMessages*/] = useState(initMessages);

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
