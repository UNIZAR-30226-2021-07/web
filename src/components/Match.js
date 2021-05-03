import React, { useContext, useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Chat from "./Chat";
import Board from "./Board";

import { renderPausePopup } from "./popups/PausePopup";
import { SessionContext } from "./SessionProvider";

import pause from "../assets/common/icons/pause.svg";
import exit from "../assets/common/icons/logout.svg";
import help from "../assets/common/icons/help.svg";

function Match() {
  const session = useContext(SessionContext);
  const game = useContext(GameContext);
  const history = useHistory();

  useEffect(() => {
    //console.log(game.hand);
    //console.log(game.currentTurn);
    console.log(game.players);
  }, [game.players]);

  useEffect(() => {
    // If socket null, (e.g. when disconnected) go back to menu
    if (!session.socket.current) {
      session.setUpdateSocket((session.updateSocket + 1) % 2);
      history.push("/home");
    }
  }, []);

  const leaveGame = async (e) => {
    e.preventDefault();
    session.socket.current.emit("leave", (data) => {
      if (data && data.error) {
        console.error(data.error);
      } else {
        // When leaving, change updateSocket to get a new socket
        session.setUpdateSocket((session.updateSocket + 1) % 2);
        history.push("/home");
      }
    });
  };

  return (
    <Row className="m-0 p-0">
      <Col md={8} className="p-0">
        <Row className="mx-0 justify-content-around">
          <Image src={exit} className="game-icon" onClick={leaveGame} />
          <Image src={pause} className="game-icon" onClick={renderPausePopup} />
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
