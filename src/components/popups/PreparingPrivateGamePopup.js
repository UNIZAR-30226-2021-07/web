import React, { useContext, useEffect } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";
import { renderStartGamePopup } from "./StartGamePopup";
import { NumUsersContext } from "../UsersProvider";
import { SessionContext } from "../SessionProvider";
import { leaveGame } from "../WebSockets";

export default function PreparingPrivateGamePopup({ socket }) {
  const history = useHistory();
  const userContext = useContext(NumUsersContext);
  const session = useContext(SessionContext);
  const total = 6;

  useEffect(() => {
    if (!socket || !socket.current) return;

    socket.current.on("start_game", (response) => {
      if (response && response.error) {
        renderErrorPopup(response.error);
      } else {
        PopupboxManager.close();
        session.setOnMatch(true);
        history.push("/match");
        socket.current.off("game_owner", onChangeLeader);
      }
    });
  }, []);

  useEffect(() => {
    if (!socket || !socket.current) return;
    socket.current.on("game_owner", onChangeLeader);
  }, []);

  const onChangeLeader = () => {
    console.log("GAME_OWNER_MSG");
    PopupboxManager.close();
    renderStartGamePopup({ socket });
  };

  return (
    <Popup
      title="Preparando partida..."
      close={true}
      onClose={() => leaveGame({ socket })}
    >
      <Row className="justify-content-center mb-3 mt-3">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Row>
      <Row className="justify-content-center">
        <p className="h5 text-center mb-3">
          {userContext.users}/{total} gaticos preparados
        </p>
      </Row>
    </Popup>
  );
}

export function renderPreparingPrivateGamePopup({ socket }) {
  const content = <PreparingPrivateGamePopup socket={socket} />;
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