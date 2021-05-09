import React, { useContext } from "react";
import { PopupboxManager } from "react-popupbox";
import { Button } from "react-bootstrap";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";

import { SessionContext } from "../SessionProvider";

import pause from "../../assets/common/icons/pause.svg";

export default function PausePopup() {
  const session = useContext(SessionContext);
  let pauseOwner = "test_user2";

  const restartGame = async (e) => {
    e.preventDefault();
    session.socket.current.emit("pause_game", false, (data) => {
      if (data && data.error) {
        renderErrorPopup(data.error);
      } else {
        PopupboxManager.close();
      }
    });
  };

  return (
    <Popup title="Partida pausada" icon={pause}>
      {pauseOwner == session.userData.name ? (
        <p className="text-center">
          Se ha pausado la partida, los gaticos <br />
          están esperando...
        </p>
      ) : (
        <p className="text-center">
          El gatico <strong>{pauseOwner}</strong> ha parado la partida
        </p>
      )}
      {pauseOwner == session.userData.name && (
        <Button
          className="primary-button"
          onClick={restartGame}
          style={{ width: "100%" }}
        >
          Reanudar Partida
        </Button>
      )}
    </Popup>
  );
}

export function renderPausePopup() {
  const content = <PausePopup />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 200,
      escClose: false,
      overlayClose: false,
    },
  });
}
