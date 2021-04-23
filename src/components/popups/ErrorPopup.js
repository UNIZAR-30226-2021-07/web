import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Button } from "react-bootstrap";

import Popup from "./PopUp";

import warning from "../../assets/common/icons/warning.svg";

export default function ErrorPopup({ body, title = "¡Atención!" }) {
  return (
    <Popup title={title} icon={warning}>
      <p className="text-center">{body}</p>
      <Button
        className="primary-button"
        onClick={PopupboxManager.close}
        style={{ width: "100%" }}
      >
        Aceptar
      </Button>
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
