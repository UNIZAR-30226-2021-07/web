import React from "react";
import { PopupboxManager } from "react-popupbox";
import {  Row, Col, Button } from "react-bootstrap";
import Popup from "./PopUp";

export default function CreateGamePopup({ code, children }) {
  return (
    <Popup title="Partida privada lista" icon="TickImage">
      <Row className="d-flex justify-content-center">
        <p>
          Comparte el siguiente código con tus <br></br>
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
          placeholder={code}
        />
        <Button className="btn btn-primary" onClick={PopupboxManager.close}>
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
