import React, { useContext } from "react";
import { Row, Button } from "react-bootstrap";
import { PopupboxManager } from "react-popupbox";
import { useHistory } from "react-router-dom";

import Popup from "./PopUp";

import { SessionContext } from "../SessionProvider";

export default function LeaveGamePopup({ isPrivate }) {
  const { socket, updateSocket, setUpdateSocket } = useContext(SessionContext);

  const history = useHistory();

  const leaveGame = (e) => {
    e.preventDefault();
    socket.current.emit("leave", (data) => {
      if (data && data.error) {
        console.error(data.error);
      } else {
        // When leaving, change updateSocket to get a new socket
        PopupboxManager.close();
        setUpdateSocket((updateSocket + 1) % 2);
        history.push("/home");
      }
    });
  };

  const exitGame = (e) => {
    e.preventDefault();
    PopupboxManager.close();
    setUpdateSocket((updateSocket + 1) % 2);
    history.push("/home");
  };

  return (
    <Popup title="¿Quieres salir?" close={true}>
      <Row>
        <Button className="alert-button w-100 mt-3" onClick={leaveGame}>
          Abandonar partida
        </Button>
      </Row>
      {isPrivate && (
        <Row>
          <Button className="primary-button w-100 my-3" onClick={exitGame}>
            Salir y reanudar más tarde
          </Button>
        </Row>
      )}
    </Popup>
  );
}

export function renderLeaveGamePopup(isPrivate) {
  const content = <LeaveGamePopup isPrivate={isPrivate} />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
      fadeOut: true,
      fadeOutSpeed: 50,
      escClose: false,
      overlayClose: false,
    },
  });
}
