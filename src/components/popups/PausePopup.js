import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Button } from "react-bootstrap";

import Popup from "./PopUp";

import pause from "../../assets/common/icons/pause.svg";

export default function PausePopup() {
  return (
    <Popup title="Partida pausada" icon={pause}>
      <p className="text-center">
        Se ha pausado la partida, los gaticos <br />
        están esperando...
      </p>
      <Button
        className="primary-button"
        onClick={PopupboxManager.close}
        style={{ width: "100%" }}
      >
        Reanudar Partida
      </Button>
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
