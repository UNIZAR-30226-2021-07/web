import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Button, Image } from "react-bootstrap";

import Hand from "./game/Hand";
import Body from "./game/Body";
import PlayerBox from "./game/PlayerBox";
import { renderErrorPopup } from "./popups/ErrorPopup";

import { playDiscard } from "./WebSockets";
import { GameContext } from "./GameProvider";
import { SessionContext } from "./SessionProvider";

import fuegos from "../assets/common/icons/fuegos-artificiales.png";

function Board() {
  const session = useContext(SessionContext);
  const { players, bodies, currentTurn, ownFinished, isFinished } = useContext(GameContext);

  const [numRivals, setNumRivals] = useState(0);
  const [gamePlayers, setGamePlayers] = useState(players);

  useEffect(() => {
    if (players.length > 0) {
      setNumRivals(players.length);
      setGamePlayers(players);
    }
    return () => {
      setNumRivals(0);
    };
  }, [players]);

  const Player1 = () => {
    let index = 2;
    return numRivals == 5 || numRivals == 6 ? (
      <PlayerBox
        username={gamePlayers[index].name}
        display_name={gamePlayers[index].display_name}
        photo={gamePlayers[index].picture}
        body={bodies[gamePlayers[index].name]}
      />
    ) : null;
  };

  const Player2 = () => {
    let index = 1;
    return numRivals > 2 ? (
      <PlayerBox
        username={gamePlayers[index].name}
        display_name={gamePlayers[index].display_name}
        photo={gamePlayers[index].picture}
        body={bodies[gamePlayers[index].name]}
      />
    ) : null;
  };

  const Player3 = () => {
    let index = -1;
    if (numRivals == 2) index = 1;
    else if (numRivals == 4) index = 2;
    else if (numRivals == 6) index = 3;
    return index != -1 ? (
      <PlayerBox
        username={gamePlayers[index].name}
        display_name={gamePlayers[index].display_name}
        photo={gamePlayers[index].picture}
        body={bodies[gamePlayers[index].name]}
      />
    ) : null;
  };

  const Player4 = () => {
    let index = -1;
    if (numRivals == 3) index = 2;
    else if (numRivals == 4 || numRivals == 5) index = 3;
    else if (numRivals == 6) index = 4;
    return index != -1 ? (
      <PlayerBox
        username={gamePlayers[index].name}
        display_name={gamePlayers[index].display_name}
        photo={gamePlayers[index].picture}
        body={bodies[gamePlayers[index].name]}
      />
    ) : null;
  };

  const Player5 = () => {
    let index = -1;
    if (numRivals == 5) index = 4;
    else if (numRivals == 6) index = 5;
    return index != -1 ? (
      <PlayerBox
        username={gamePlayers[index].name}
        display_name={gamePlayers[index].display_name}
        photo={gamePlayers[index].picture}
        body={bodies[gamePlayers[index].name]}
      />
    ) : null;
  };

  const playPass = async (e) => {
    e.preventDefault();
    session.socket.current.emit("play_pass", (data) => {
      if (data && data.error) {
        renderErrorPopup(data.error);
      }
    });
  };

  const drop = (e) => {
    e.preventDefault();

    // Obtain card_id of card in event e
    let slot = e.dataTransfer.getData("slot");
    if (!slot) {
      return;
    }
    slot = parseInt(slot);
    let data = slot;
    playDiscard(session, data);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <Container className=" d-flex flex-column mx-0 p-0">
      <Row className="justify-content-around flex-grow-1">
        <Player2 />
        <Player1 />
        <Player3 />
        <Player4 />
        <Player5 />
      </Row>
      <Row className="justify-content-around">
        {(currentTurn == session.userData.name && !isFinished) ? (
          <Button className="pass-button-unlocked" onClick={playPass}>
            PASAR
          </Button>
        ) : (
          <Button className="pass-button-locked">PASAR</Button>
        )}
        {(ownFinished || isFinished) ? (
          <div>
            <Row>
              <h4>¡HAS TERMINADO!</h4>
            </Row>
            <Row className="align-items-center justify-content-center">
              <Image style={{ height: "80px", width: "80px" }} src={fuegos} />
            </Row>
          </div>
        ) : (
          <Body
            cardStacks={bodies[session.userData.name]}
            username={session.userData.name}
          />
        )}
        <div className="discard-base" onDrop={drop} onDragOver={allowDrop}>
          <h5 className="mt-4">DESCARTAR</h5>
        </div>
      </Row>
      <Row className="justify-content-center">
        <Hand />
      </Row>
    </Container>
  );
}

export default Board;
