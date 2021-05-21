import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row } from "react-bootstrap";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";
import { stopSearchingGame } from "../WebSockets";

const curiosities = [
  "Los gatos tricolores siempre son hembras",
  "Todos los gatos recién nacidos tienen los ojos azules.",
];

export default function JoinPublicGamePopup({ socket }) {
  return (
    <Popup
      title="Preparando partida..."
      close={true}
      onClose={() => stopSearchingGame({ socket })}
    >
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

export function renderJoinPublicGamePopup(session, game) {
  const socket = session.socket;

  function callback(data) {
    if (data && data.error) {
      console.error(data.error);
    }
  }

  if (!socket.current) {
    renderErrorPopup("No hay conexión con el servidor, vuelva a intentarlo");
    return;
  }
  socket.current.emit("search_game", callback);
  // Listen to receive a game code
  socket.current.once("found_game", (response) => {
    // Join public game with the given code
    socket.current.emit("join", response.code, callback);
    game.setIsPrivate(false);
  });

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
