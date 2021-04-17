import React, { useContext } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";
import { NumUsersContext } from "../UsersProvider";

export default function StartGamePopup({ socket }) {
  const history = useHistory();
  const userContext = useContext(NumUsersContext);
  const total = 6;

  const handleClick = async (e) => {
    e.preventDefault();

    socket.current.emit("start_game", (response) => {
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
          {userContext.users}/{total} gaticos preparados
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
  const content = (
    <StartGamePopup socket={socket} />
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
