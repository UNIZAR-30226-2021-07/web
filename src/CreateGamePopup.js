import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function CreateGamePopup({ code, children }) {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <div>Tick Icon</div>
        <h2 className="popup-title">Partida privada lista</h2>
      </Row>
      <Row className="d-flex justify-content-center">
        <p>
          Comparte el siguiente código con tus <br></br>
          amigos para empezar a jugar.
        </p>
      </Row>
      <Row className="d-flex justify-content-between">
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
    </Container>
  );
}

// For test purposes only
export function openCreateGamePopup(code) {
  const content = <CreateGamePopup code={code} />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
