import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";

import Popup from "./PopUp";

import warning from "../../assets/common/icons/warning.svg";

export default function ErrorPopup({ body, title = "¡Atención!" }) {
  return (
    <Popup title={title} icon={warning}>
      <Row className="justify-content-center">
        <p className="text-center">{body}</p>
      </Row>
      <Row className="justify-content-around">
        <Button className="primary-button" onClick={PopupboxManager.close}>
          Atrás
        </Button>
        <Button className="continue-button" onClick={PopupboxManager.close}>
          Continuar
        </Button>
      </Row>
    </Popup>
  );
}

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
