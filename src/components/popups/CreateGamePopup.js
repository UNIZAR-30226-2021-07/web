import React, { useState, useEffect } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button, Image } from "react-bootstrap";

import Popup from "./PopUp";
import { renderStartGamePopup } from "./StartGamePopup";

import check from "../../assets/common/icons/check.svg";
import clipboard from "../../assets/common/icons/clipboard.svg";

function copyCode() {
  const codeField = document.getElementById("game-code");
  codeField.focus();
  codeField.select();
  document.execCommand("copy");
}

export default function CreateGamePopup({ socket }) {

  const [code, setCode] = useState("");

  useEffect(() => {
    
    socket.current.emit("create_game", callback);
  
    socket.current.on("create_game",  (response) => {
      console.log("CREATE GAME RECIBIDO");
      console.log(response);
      setCode(response.code);
    });
  }, []);

  function callback(data) {
    if (data && data.error) {
      console.error(data.error);
    }
  }

  return (
    <Popup title="Partida privada lista" icon={check} close={true}>
      <Row className="justify-content-center">
        <p className="text-center">
          Comparte el siguiente código con tus
          <br />
          amigos para empezar a jugar.
        </p>
      </Row>

      <Row className="justify-content-center">
        <div className="input-group w-50 mr-2">
          <div className="input-group-prepend">
            <Button
              className="primary-background btn-outline-primary"
              type="button"
              onClick={copyCode}
            >
              <Image src={clipboard} style={{ height: "20px" }} />
            </Button>
          </div>
          <input
            id="game-code"
            type="text"
            size="6"
            className="text-center form-control h-100"
            readOnly
            value={code}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <Button className="primary-button" onClick={renderStartGamePopup}>
          CONFIRMAR
        </Button>
      </Row>
    </Popup>
  );
}

export function renderCreateGamePopup({socket}) {
  const content = <CreateGamePopup socket={socket} />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
