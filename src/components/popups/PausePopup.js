import React, { useEffect, useContext } from "react";
import { PopupboxManager } from "react-popupbox";
import { Button } from "react-bootstrap";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";

import { SessionContext } from "../SessionProvider";
import { GameContext } from "../GameProvider";

import pauseIcon from "../../assets/common/icons/pause.svg";

export default function PausePopup() {
  const {socket, userData} = useContext(SessionContext);
  const { pause } = useContext(GameContext);

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
    if (!pause.isPaused) {
      console.log("Fin pausa");
      PopupboxManager.close();
    }
  }, [pause.isPaused]);

  return (
    <Popup title="Partida pausada" icon={pauseIcon}>
      {pause.paused_by == userData.name ? (
        <p className="text-center">
          Se ha pausado la partida, los gaticos <br />
          están esperando...
        </p>
      ) : (
        <p className="text-center">
          El gatico <strong>{pause.paused_by}</strong> ha parado la partida
        </p>
      )}
      {pause.paused_by == userData.name && (
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
