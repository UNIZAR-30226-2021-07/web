import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";
import Popup from "./PopUp";

import { renderPreparingGamePopup } from "./PreparingGamePopup";

export default function JoinGamePopup() {
  return (
    <Popup title="Unirse a partida" icon="TickImage">
      <Row className="justify-content-center">
        <p>
          Introduce el código de partida y <br></br>
          comienza a jugar con tus amigos.
        </p>
      </Row>
      <Row className="justify-content-between">
        <input
          className="code-box"
          type="text"
          size="8"
          minLength="4"
          maxLength="8"
          placeholder="Código"
        ></input>
        <Button
          className="btn btn-primary"
          onClick={renderPreparingGamePopup}
        >
          CONFIRMAR
        </Button>
      </Row>
    </Popup>
  );
}

// For test purposes only
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
