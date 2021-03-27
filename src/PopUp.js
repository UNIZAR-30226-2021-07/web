import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Container, Col } from "react-bootstrap";

export default function Popup({ title, icon, children }) {
  return (
    <Container>
      <div>
        <div className="d-flex justify-content-between col-12">
          <div className="d-flex d-flex justify-content-start align-self-center">
            {icon}
          </div>
          <h2 className="popup-title ">{title}</h2>
        </div>
      </div>
      <Col>{children}</Col>
    </Container>
  );
}

// For test purposes only
export function openPopup(title, icon) {
  const content = <Popup title={title} icon={icon} />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
    },
  });
}
