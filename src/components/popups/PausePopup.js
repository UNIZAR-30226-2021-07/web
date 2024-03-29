import React, { useEffect, useContext } from "react";
import { PopupboxManager } from "react-popupbox";
import { Button } from "react-bootstrap";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";

import { SessionContext } from "../SessionProvider";
import { GameContext } from "../GameProvider";

import pauseIcon from "../../assets/common/icons/pause.svg";

export default function PausePopup() {
  const { socket, userData } = useContext(SessionContext);
  const { isPaused, pausedBy } = useContext(GameContext);

  const restartGame = async (e) => {
    e.preventDefault();
    socket.current.emit("pause_game", false, (data) => {
      if (data && data.error) {
        renderErrorPopup(data.error);
      }
    });
  };

  useEffect(() => {
    //- Termina la pausa
    if (!isPaused) {
      PopupboxManager.close();
    }
  }, [isPaused]);

  return (
    <Popup title="Partida pausada" icon={pauseIcon}>
      {pausedBy == userData.name ? (
        <p className="text-center">
          Se ha pausado la partida, los gaticos <br />
          están esperando...
        </p>
      ) : (
        <p className="text-center">
          El gatico <strong>{pausedBy}</strong> ha parado la partida
        </p>
      )}
      {pausedBy == userData.name && (
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
