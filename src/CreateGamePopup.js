import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Col, Button } from "react-bootstrap";
import Popup from "./PopUp";

import { renderStartGamePopup } from "./StartGamePopup";

import check from "./assets/common/icons/check.svg";

export default function CreateGamePopup({ code, children }) {
  return (
    <Popup title="Partida privada lista" icon={check}>
      <Row className="justify-content-center">
        <p className="text-center">
          Comparte el siguiente código con tus<br />
          amigos para empezar a jugar.
        </p>
      </Row>
      <Row className="d-flex justify-content-around">
        <Button className="btn btn-secondary" onClick={PopupboxManager.close}>
          Copy
        </Button>
        <input
          className="code-box"
          type="text"
          size="4"
          readOnly
          value={code}
        />
        <Button
          className="btn btn-primary"
          onClick={() => renderStartGamePopup()}
        >
          CONFIRMAR
        </Button>
      </Row>
      <Col>{children}</Col>
    </Popup>
  );
}

// For test purposes only
export function renderCreateGamePopup(code) {
  const content = <CreateGamePopup code={code} />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
