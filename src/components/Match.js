import React, { useContext, useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Chat from "./Chat";
import Board from "./Board";
import Timer from "./Timer";

import { renderPausePopup } from "./popups/PausePopup";
import { renderErrorPopup } from "./popups/ErrorPopup";
import { renderLeaderboardPopup } from "./popups/LeaderboardPopup";
import { renderLeaveGamePopup } from "./popups/LeaveGamePopup";

import { SessionContext } from "./SessionProvider";
import { GameContext } from "./GameProvider";

import pauseIcon from "../assets/common/icons/pause.svg";
import exit from "../assets/common/icons/logout.svg";
import help from "../assets/common/icons/help.svg";

function Match() {
  const {
    socket,
    updateSocket,
    setUpdateSocket,
    userData,
    socketChange,
  } = useContext(SessionContext);

  const { isPrivate, isPaused, pausedBy, isFinished, leaderboard } = useContext(
    GameContext
  );

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

  useEffect(() => {
    //La partida ha terminado
    if (isFinished) {
      renderLeaderboardPopup(socket);
    }
  }, [isFinished, leaderboard]);

  // Listen to "game_cancelled" events from server
  useEffect(() => {
    if (!socket.current) {
      return;
    }
    socket.current.once("game_cancelled", () => {
      renderErrorPopup(
        "Juega otra partida para disfrutar de los gaticos",
        "Partida cancelada"
      );
      // Get out of match
      // When leaving, change updateSocket to get a new socket
      setUpdateSocket((updateSocket + 1) % 2);
      history.push("/home");
      return;
    });

    return () => {
      socket.current.off("game_cancelled");
    };
  }, [socketChange]);

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

  return (
    <Row className="m-0 p-0 flex-nowrap">
      <Col md={8} className="px-3 py-2 d-flex flex-column">
        <Row className="mx-0 justify-content-between">
          <Image
            src={exit}
            className="game-icon"
            onClick={() => renderLeaveGamePopup(isPrivate)}
          />
          <Timer />
          <div>
            {isPrivate && (
              <Image
                src={pauseIcon}
                className="game-icon mr-2"
                onClick={pauseGame}
              />
            )}
            <Image
              src={help}
              className="game-icon"
              onClick={() => {
                alert("Help");
              }}
            />
          </div>
        </Row>
        <Row className="mx-0 flex-grow-1">
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
