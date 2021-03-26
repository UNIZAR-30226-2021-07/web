import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function StartGamePopup({ready, total, children}) {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h2 className="popup-title">¿Empezar partida?</h2>
      </Row>
      <Row className="d-flex justify-content-center">
        <p>{ready}/{total} gaticos preparados</p>
      </Row>
      <Row className="d-flex justify-content-center">
        <Button
          className="btn btn-primary btn-lg btn-block"
          onClick={PopupboxManager.close}
        >
          Empezar partida
        </Button>
      </Row>
      <Col>{children}</Col>
    </Container>
  );
}

// For test purposes only
export function openStartGamePopup(ready, total) {
  const content = <StartGamePopup ready={ready} total={total}/>;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}