import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";

import Popup from "./PopUp";

export default function StartGamePopup({ ready, total }) {
  return (
    <Popup title="¿Empezar partida?">
      <Row className="justify-content-center">
        <p className="h5 text-center mb-3">
          {ready}/{total} gaticos preparados
        </p>
      </Row>
      <Row className="justify-content-center">
        <Button className="primary-button" onClick={PopupboxManager.close}>
          Empezar partida
        </Button>
      </Row>
    </Popup>
  );
}

// For test purposes only
export function renderStartGamePopup() {
  const ready = "4"; //Se actualizara con el servidor
  const total = "6";
  const content = <StartGamePopup ready={ready} total={total} />;
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
