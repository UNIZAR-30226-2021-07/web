import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";
import Popup from "./PopUp";

import { renderPreparingGamePopup } from "./PreparingGamePopup";

import check from "./assets/common/icons/check.svg";

export default function JoinGamePopup() {
  return (
    <Popup title="Unirse a partida" icon={check} close={true}>
      <Row className="justify-content-center">
        <p className="text-center">
          Introduce el código de partida y <br />
          comienza a jugar con tus amigos.
        </p>
      </Row>
      <Row className="justify-content-center">
        <div>
          <input
            id="game-code"
            type="text"
            size="6"
            minLength="4"
            maxLength="6"
            placeholder="Código"
            className="text-center form-control h-100 button-rouded"
          ></input>
        </div>
        <Button
          className="primary-button ml-2"
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
