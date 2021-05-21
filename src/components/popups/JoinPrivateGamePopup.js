import React, { useState, useContext } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button, Form } from "react-bootstrap";
//import { useHistory } from "react-router-dom";
import { GameContext } from "../GameProvider";

import Popup from "./PopUp";

import { renderPreparingPrivateGamePopup } from "./PreparingPrivateGamePopup";
import { renderErrorPopup } from "./ErrorPopup";

import tick from "../../assets/common/icons/tick.svg";

export default function JoinPrivateGamePopup({
  socket,
  //setRestartPending,
  //restartPending,
  //setOnMatch,
}) {
  const [code, setCode] = useState("");
  //const history = useHistory();
  const game = useContext(GameContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.current.emit("join", code, (response) => {
      console.log("JOIN" + code);
      if (response && response.error) {
        renderErrorPopup(response.error);
      } //else if (!restartPending) {
        // Join new game
        game.setIsPrivate(true);
        PopupboxManager.close();
        renderPreparingPrivateGamePopup({ socket });
      //}
    });


    /*
    //if (restartPending) {
      // Join existing game
      socket.current.once("start_game", (response) => {
        if (response && response.error) {
          renderErrorPopup(response.error);
        } else {
          PopupboxManager.close();
          setOnMatch(true);
          history.push("/match");
          setRestartPending(false);
        }
      });
    //}
    */
  };

  return (
    <Popup title="Unirse a partida" icon={tick} close={true}>
      <Row className="justify-content-center">
        <p className="text-center">
          Introduce el código de partida y <br />
          comienza a jugar con tus amigos.
        </p>
      </Row>
      <Row className="justify-content-center">
        <Form className="input-group" onSubmit={handleSubmit}>
          <input
            id="game-code"
            type="text"
            size="6"
            minLength="4"
            maxLength="6"
            placeholder="Código"
            className="text-center form-control h-100 button-rouded"
            onChange={(e) => setCode(e.target.value)}
          ></input>
          <Button className="primary-button ml-2" type="submit">
            CONFIRMAR
          </Button>
        </Form>
      </Row>
    </Popup>
  );
}

export function renderJoinPrivateGamePopup({
  socket,
  setRestartPending,
  restartPending,
  setOnMatch,
}) {
  const content = (
    <JoinPrivateGamePopup
      socket={socket}
      setRestartPending={setRestartPending}
      restartPending={restartPending}
      setOnMatch={setOnMatch}
    />
  );
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
