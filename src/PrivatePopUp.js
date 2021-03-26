import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function PrivatePopup({ title, children }) {
  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-between col-12">
          <div>
            <h2 className="popup-title">{title}</h2>
          </div>
          {/* Botón de cierre si se necesita (no está en el diseño) */}
          <div className="d-flex">
            <Button
              className="close"
              aria-label="Close"
              onClick={PopupboxManager.close}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          {/* Fin botón de cierre */}
        </div>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}

// For test purposes only
export function openPrivatePopup(title) {
  const content = <PrivatePopup title={title} />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
