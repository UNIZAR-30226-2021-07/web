import React, { useEffect, useState } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";
import { renderStartGamePopup } from "./StartGamePopup";

export default function PreparingGamePopup({ socket, initialUsers }) {
  const history = useHistory();
  const [ready, setReady] = useState(initialUsers);
  const total = 6;

  useEffect(() => {
    if (!socket || !socket.current) return;

    // Setup del socket
    socket.current.on("users_waiting", (users) => {
      setReady(users);
    });

    socket.current.on("start_game", (response) => {
      if (response && response.error) {
        renderErrorPopup(response.error);
      } else {
        PopupboxManager.close();
        history.push("/match");
      }
    });

    socket.current.on("game_owner", () => {
      renderStartGamePopup(socket, ready);
    });
  }, []);

  return (
    <Popup title="Preparando partida...">
      <Row className="justify-content-center mb-3 mt-3">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Row>
      <Row className="justify-content-center">
        <p className="h5 text-center mb-3">
          {ready}/{total} usuarios preparados
        </p>
      </Row>
    </Popup>
  );
}

export function renderPreparingGamePopup(socket, numUsers) {
  const content = (
    <PreparingGamePopup socket={socket} initialUsers={numUsers} />
  );
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
