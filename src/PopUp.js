import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Container, Col, Image } from "react-bootstrap";

export default function Popup({ title, icon, children }) {
  return (
    <Container>
      <div>
        <div className="d-flex justify-content-between align-items-center col-12 mb-2">
          <Image src={icon} className="mr-2" style={{"height": "30px"}} fluid>
          </Image>
          <h2 className="popup-title mb-0">{title}</h2>
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
