import React, { useEffect } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";

const curiosities = [
  "Los gatos tricolores siempre son hembras",
  "Todos los gatos recién nacidos tienen los ojos azules.",
];

export default function JoinPublicGamePopup({ socket }) {
  const history = useHistory();

  useEffect(() => {
    if (!socket.current) {
      renderErrorPopup("No hay conexión con el servidor, vuelva a intentarlo");
    }
    socket.current.emit("search_game", callback);
    // Listen to receive a game code
    socket.current.on("found_game", (response) => {
      // Join public game with the given code
      socket.current.emit("join", response.code, callback);
      // Wait to "start_game" or "game_cancelled"
      socket.current.on("start_game", (response) => {
        if (response && response.error) {
          renderErrorPopup(response.error);
        } else {
          PopupboxManager.close();
          history.push("/match");
        }
      });
      socket.current.on("game_cancelled", () => {
        // TODO: ¿Qué hacer si se recibe game_cancelled?
        // De momento se le manda a menu, pero se podría hacer
        // que volviese a intentar el search_game... de nuevo sin
        // quitar el popup
        PopupboxManager.close();
        history.push("/menu");
      });
    });
  });

  function callback(data) {
    if (data && data.error) {
      console.error(data.error);
    }
  }

  return (
    <Popup title="Preparando partida..." close={true}>
      <Row className="justify-content-center mb-3 mt-3">
        <Row className="justify-content-center mb-3 mt-3">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </Row>
      </Row>
      <Row className="justify-content-center">¿Lo sabías?</Row>
      <Row className="justify-content-center">{curiosities[0]}</Row>
    </Popup>
  );
}

export function renderJoinPublicGamePopup({ socket }) {
  const content = <JoinPublicGamePopup socket={socket} />;
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
