import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row } from "react-bootstrap";
import Popup from "./PopUp";


const curiosities = [
    "Los gatos tricolores siempre son hembras",
    "Todos los gatos recién nacidos tienen los ojos azules.",
];


export default function PreparingGamePopup() {
  return (
    <Popup title="Preparando partida...">
      <Row className="d-flex justify-content-center">Load Icon</Row>
      <Row className="d-flex justify-content-center">
        <p>
          ¿Lo sabias? <br></br>
          {curiosities[0]}
        </p>
      </Row>
    </Popup>
  );
}

// For test purposes only
export function renderPreparingGamePopup() {
  const content = <PreparingGamePopup />;
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
