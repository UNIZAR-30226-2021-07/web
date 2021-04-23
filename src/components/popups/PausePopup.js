import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";

import Popup from "./PopUp";

import pause from "../../assets/common/icons/pause.svg";

export default function PausePopup() {
  return (
    <Popup title="Partida pausada" icon={pause}>
      <Row className="justify-content-center">
        <p className="text-center">
          Se ha pausado la partida, los gaticos <br/>
          están esperando...
        </p>
      </Row>
      <Row className="justify-content-around">
        <Button
          className="primary-button"
          onClick={PopupboxManager.close}
          style={{ width: "100%" }}
        >
          Reanudar Partida
        </Button>
      </Row>
    </Popup>
  );
}

export function renderPausePopup() {
  const content = <PausePopup />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
      escClose: false,
      overlayClose: false,
    },
  });
}
