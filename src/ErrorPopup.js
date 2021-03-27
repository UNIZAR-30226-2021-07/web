import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";
import Popup from "./PopUp";

export default function ErrorPopup({ body, title = "¡Atención!" }) {
  return (
    <Popup title={title} icon="ErrorIcon">
      <Row className="d-flex justify-content-center">
        <p>{body}</p>
      </Row>
      <Row className="d-flex justify-content-around">
        <Button className="btn btn-primary" onClick={PopupboxManager.close}>
          Atrás
        </Button>
        <Button
          className="btn btn-danger"
          onClick={PopupboxManager.close}
        >
          Continuar
        </Button>
      </Row>
    </Popup>
  );
}

// For test purposes only
export function renderErrorPopup(body, title) {
  const content = <ErrorPopup title={title} body={body} />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
