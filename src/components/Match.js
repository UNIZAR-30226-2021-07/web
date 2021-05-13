import React, { useContext, useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Chat from "./Chat";
import Board from "./Board";

import { renderPausePopup } from "./popups/PausePopup";
import { renderErrorPopup } from "./popups/ErrorPopup";

import { SessionContext } from "./SessionProvider";
import { GameContext } from "./GameProvider";

import pauseIcon from "../assets/common/icons/pause.svg";
import exit from "../assets/common/icons/logout.svg";
import help from "../assets/common/icons/help.svg";

function Match() {
  const { socket, updateSocket, setUpdateSocket, userData } = useContext(
    SessionContext
  );
  const { isPrivate, isPaused, pausedBy } = useContext(GameContext);
  const history = useHistory();

  useEffect(() => {
    // If socket null, (e.g. when disconnected) go back to menu
    if (!socket.current) {
      setUpdateSocket((updateSocket + 1) % 2);
      history.push("/home");
    }
  }, []);

  useEffect(() => {
    //Ha habido una pausa por parte de otro usuario
    if (isPaused && pausedBy != userData.name) {
      renderPausePopup();
    }
  }, [isPaused, pausedBy]);

  const pauseGame = async (e) => {
    e.preventDefault();
    socket.current.emit("pause_game", true, (data) => {
      if (data && data.error) {
        renderErrorPopup(data.error);
      } else {
        renderPausePopup();
      }
    });
  };

  const leaveGame = async (e) => {
    e.preventDefault();
    socket.current.emit("leave", (data) => {
      if (data && data.error) {
        console.error(data.error);
      } else {
        // When leaving, change updateSocket to get a new socket
        setUpdateSocket((updateSocket + 1) % 2);
        history.push("/home");
      }
    });
  };

  return (
    <Row className="m-0 p-0 flex-nowrap">
      <Col md={8} className="p-0">
        <Row className="mx-0 justify-content-around">
          <Image src={exit} className="game-icon" onClick={leaveGame} />
          {isPrivate && (
            <Image src={pauseIcon} className="game-icon" onClick={pauseGame} />
          )}
          <Image
            src={help}
            className="game-icon"
            onClick={() => {
              alert("Help");
            }}
          />
        </Row>
        <Row className="mx-0">
          <Board />
        </Row>
      </Col>
      <Col md={4} className="p-0">
        <Chat />
      </Col>
    </Row>
  );
}

export default Match;
