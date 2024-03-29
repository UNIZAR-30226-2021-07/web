import React, { useContext } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";
import { NumUsersContext } from "../UsersProvider";
import { SessionContext } from "../SessionProvider";
import { GameContext } from "../GameProvider";

import { leaveGame } from "../WebSockets";

export default function StartGamePopup({ socket }) {
  const history = useHistory();
  const userContext = useContext(NumUsersContext);
  const session = useContext(SessionContext);
  const game = useContext(GameContext);
  const total = 6;

  const handleClick = async (e) => {
    e.preventDefault();

    socket.current.emit("start_game", (response) => {
      if (response && response.error) {
        renderErrorPopup(response.error);
      } else {
        PopupboxManager.close();
        session.setOnMatch(true);
        game.setIsPrivate(true);
        history.push("/match");
      }
    });
  };
  return (
    <Popup
      title="¿Empezar partida?"
      close={true}
      onClose={() => leaveGame({ socket })}
    >
      <Row className="justify-content-center">
        <p className="h5 text-center mb-3">
          {userContext.users}/{total} gaticos preparados
        </p>
      </Row>
      <Row className="justify-content-center">
        {userContext.users > 1 ? (
          <Button className="primary-button" onClick={handleClick}>
            Empezar partida
          </Button>
        ) : (
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="tooltip-disabled">
                Se necesitan al menos dos jugadores para comenzar la partida
              </Tooltip>
            }
          >
            <Button className="primary-button" disabled>
              Empezar partida
            </Button>
          </OverlayTrigger>
        )}
      </Row>
    </Popup>
  );
}

export function renderStartGamePopup({ socket }) {
  const content = <StartGamePopup socket={socket} />;
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
