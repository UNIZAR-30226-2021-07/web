import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Col, Button } from "react-bootstrap";
import Popup from "./PopUp";

export default function DeleteAccountPopup({ children }) {
  return (
    <Popup title="¿Desea eliminar su cuenta permanentemente?">
      <Row>
        <Button className="btn btn-primary btn-lg btn-block">Sí</Button>
      </Row>
      <Row>
        <Button className="btn btn-danger btn-lg btn-block">No</Button>
      </Row>
      <Col>{children}</Col>
    </Popup>
  );
}

// For test purposes only
export function renderDeleteAccountPopup() {
  const content = <DeleteAccountPopup />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
