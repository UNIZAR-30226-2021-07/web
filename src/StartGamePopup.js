import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Col, Button } from "react-bootstrap";
import Popup from "./PopUp";

export default function StartGamePopup({ ready, total, children }) {
  return (
    <Popup title="¿Empezar partida?">
      <Row className="d-flex justify-content-center">
        <p>
          {ready}/{total} gaticos preparados
        </p>
      </Row>
      <Row className="d-flex justify-content-center">
        <Button
          className="btn btn-primary btn-lg btn-block"
          onClick={PopupboxManager.close}
        >
          Empezar partida
        </Button>
      </Row>
      <Col>{children}</Col>
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
