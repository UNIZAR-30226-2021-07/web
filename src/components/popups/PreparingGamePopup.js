import React, { useEffect, useState } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";

import loadArrow from "../../assets/common/icons/flecha-cargar.svg";

export default function PreparingGamePopup({ socket, initialUsers }) {
  const history = useHistory();
  const [ready, setReady] = useState(initialUsers);
  const total = "6";

  useEffect(() => {
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
  }, []);

  return (
    <Popup title="Preparando partida...">
      <Row className="justify-content-center mb-3 mt-3">
        <Image src={loadArrow} fluid></Image>
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
