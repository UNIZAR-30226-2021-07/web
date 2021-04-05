import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";

import Popup from "./PopUp";

export default function DeleteAccountPopup() {
  return (
    <Popup title="¿Eliminar su cuenta">
      <Row className="align-items-center justify-content-center">
        <h2 className="popup-title mb-0">permanentemente?</h2>
      </Row>
      <Row>
        <Button
          className="alert-button mb-3 mt-4"
          style={{ width: "100%" }}
          onClick={PopupboxManager.close}
        >
          Sí
        </Button>
      </Row>
      <Row>
        <Button
          className="tertiary-button"
          style={{ width: "100%" }}
          onClick={PopupboxManager.close}
        >
          No
        </Button>
      </Row>
    </Popup>
  );
}

export function renderDeleteAccountPopup() {
  const content = <DeleteAccountPopup />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
      escClose: false,
      overlayClose: false,
    },
  });
}
