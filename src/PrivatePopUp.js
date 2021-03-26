import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";
import Popup from "./PopUp";

export default function PrivatePopup() {
  return (
    <Popup title="Unirse a partida" icon="TickImage">
        <Row className="d-flex justify-content-center">
        <p>
          Introduce el código de partida y <br></br>
          comienza a jugar con tus amigos.
        </p>
      </Row>
      <Row className="d-flex justify-content-between">
        <input className= "code-box"
          type="text"
          size = "8"
          minLength="4"
          maxLength="8"
          placeholder="Código"
        ></input>
        <Button
          className="btn btn-primary"
          onClick={PopupboxManager.close}
        >
          CONFIRMAR
        </Button>
      </Row>
    </Popup>
)
}

// For test purposes only
export function openPrivatePopup() {
  const content = <PrivatePopup />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
