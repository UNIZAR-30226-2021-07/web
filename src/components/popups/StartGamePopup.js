import React, { useState, useEffect } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";

export default function StartGamePopup({socket}) {
  const history = useHistory();
  const [ready, setReady] = useState("1");
  const total = "6";

  useEffect(() => {
    socket.current.on("users_waiting", (users) => {
      setReady(users);
    });
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    socket.current.emit("start_game", (response) => {
      console.log(response);
      if (response && response.error) {
        renderErrorPopup(response.error);
      } else {
        PopupboxManager.close();
        history.push("/match");
      }
    });
  };

  return (
    <Popup title="¿Empezar partida?">
      <Row className="justify-content-center">
        <p className="h5 text-center mb-3">
          {ready}/{total} gaticos preparados
        </p>
      </Row>
      <Row className="justify-content-center">
        <Button className="primary-button" onClick={handleClick}>
          Empezar partida
        </Button>
      </Row>
    </Popup>
  );
}

export function renderStartGamePopup(socket) {
  const content = <StartGamePopup  socket={socket} />;
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
