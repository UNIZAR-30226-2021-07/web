import React, { useState } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button, Form } from "react-bootstrap";

import Popup from "./PopUp";

import { renderPreparingPrivateGamePopup } from "./PreparingPrivateGamePopup";
import { renderErrorPopup } from "./ErrorPopup";

import check from "../../assets/common/icons/check.svg";

export default function JoinPrivateGamePopup({ socket }) {
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    socket.current.emit("join", code, (response) => {
      if (response && response.error) {
        renderErrorPopup(response.error);
      } else {
        PopupboxManager.close();
        renderPreparingPrivateGamePopup({socket});
      }
    });
  };

  return (
    <Popup title="Unirse a partida" icon={check} close={true}>
      <Row className="justify-content-center">
        <p className="text-center">
          Introduce el código de partida y <br />
          comienza a jugar con tus amigos.
        </p>
      </Row>
      <Row className="justify-content-center">
        <Form className="input-group" onSubmit={handleSubmit}>
          <input
            id="game-code"
            type="text"
            size="6"
            minLength="4"
            maxLength="6"
            placeholder="Código"
            className="text-center form-control h-100 button-rouded"
            onChange={(e) => setCode(e.target.value)}
          ></input>
          <Button className="primary-button ml-2" type="submit">
            CONFIRMAR
          </Button>
        </Form>
      </Row>
    </Popup>
  );
}

export function renderJoinPrivateGamePopup({ socket }) {
  const content = <JoinPrivateGamePopup socket={socket} />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
