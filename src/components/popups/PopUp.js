import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Container, Row, Image, Button } from "react-bootstrap";

export default function Popup({
  title,
  icon,
  close,
  onClose = PopupboxManager.close,
  children,
}) {
  function handleClose() {
    PopupboxManager.close();
    onClose();
  }

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
          <Button className="close" onClick={handleClose}>
            &times;
          </Button>
        )}
      </Row>
      {children}
    </Container>
  );
}

export function openPopup(title, icon, close, onCloseAction) {
  const content = (
    <Popup
      title={title}
      icon={icon}
      close={close}
      onCloseAction={onCloseAction}
    />
  );
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
