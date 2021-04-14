import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button, Form } from "react-bootstrap";

import Popup from "./PopUp";

import { renderPreparingGamePopup } from "./PreparingGamePopup";

import check from "../../assets/common/icons/check.svg";

export default function JoinGamePopup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle");
    renderPreparingGamePopup();
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
          ></input>
          <Button className="primary-button ml-2" type="submit">
            CONFIRMAR
          </Button>
        </Form>
      </Row>
    </Popup>
  );
}

export function renderJoinGamePopup() {
  const content = <JoinGamePopup />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
