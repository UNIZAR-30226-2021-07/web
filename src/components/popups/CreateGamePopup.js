import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button, Image } from "react-bootstrap";

import Popup from "./PopUp";
import { renderStartGamePopup } from "./StartGamePopup";
import { leaveGame } from "../WebSockets";

import check from "../../assets/common/icons/check.svg";
import clipboard from "../../assets/common/icons/clipboard.svg";

function copyCode() {
  const codeField = document.getElementById("game-code");
  codeField.focus();
  codeField.select();
  document.execCommand("copy");
}

export default function CreateGamePopup({ socket, code }) {
  return (
    <Popup
      title="Partida privada lista"
      icon={check}
      close={true}
      onClose={() => {
        leaveGame({ socket });
      }}
    >
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
        <Button
          className="primary-button"
          onClick={() => renderStartGamePopup({ socket })}
        >
          CONFIRMAR
        </Button>
      </Row>
    </Popup>
  );
}

export function renderCreateGamePopup({ socket }) {
  socket.current.emit("create_game", callback);

  socket.current.once("create_game", (response) => {
    const content = <CreateGamePopup socket={socket} code={response.code} />;
    PopupboxManager.open({
      content,
      config: {
        fadeIn: true,
        fadeInSpeed: 400,
        escClose: false,
        overlayClose: false,
      },
    });
  });

  function callback(data) {
    if (data && data.error) {
      console.error(data.error);
    }
  }
}
