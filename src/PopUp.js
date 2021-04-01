import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Container, Row, Image, Button } from "react-bootstrap";

export default function Popup({ title, icon, close, children }) {
  return (
    <Container>
      <Row className="justify-content-center mb-2 align-items-center">
        <Image
          src={icon}
          className="mr-2"
          style={{ height: "30px" }}
          fluid
        ></Image>
        <h2 className="popup-title mb-0">{title}</h2>
        {close && (
          <Button
            id="close-button"
            className="close"
            onClick={PopupboxManager.close}
          >
            &times;
          </Button>
        )}
      </Row>
      {children}
    </Container>
  );
}

// For test purposes only
export function openPopup(title, icon, close) {
  const content = <Popup title={title} icon={icon} close={close}/>;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
