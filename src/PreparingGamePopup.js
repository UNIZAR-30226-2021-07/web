import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Image } from "react-bootstrap";
import Popup from "./PopUp";
import loadArrow from "./assets/common/icons/flecha-cargar.svg"

const curiosities = [
  "Los gatos tricolores siempre son hembras",
  "Todos los gatos recién nacidos tienen los ojos azules.",
];

export default function PreparingGamePopup() {
  return (
    <Popup title="Preparando partida...">
      <Row className="justify-content-center mb-3 mt-3">
        <Image src={loadArrow} fluid></Image>
      </Row>
      <Row className="justify-content-center"> 
          ¿Lo sabías?
      </Row>
      <Row className="justify-content-center"> 
          {curiosities[0]}
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
