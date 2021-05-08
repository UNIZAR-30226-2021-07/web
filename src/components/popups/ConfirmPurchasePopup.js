import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button, Image } from "react-bootstrap";

import Popup from "./PopUp";

import coins from "../../assets/common/icons/huella.svg";

export default function ConfirmPurchasePopup({ price }) {
  return (
    <Popup title="¿Quiere comprar el artículo?" close={true}>
      <Row className="coins shop justify-content-center align-items-center">
        <span className="mr-2">{price}</span>
        <Image src={coins} alt="Precio" />
      </Row>
      <Row>
        <Button
          className="success-button mb-3 mt-4"
          style={{ width: "100%" }}
          onClick={PopupboxManager.close}
        >
          Sí
        </Button>
      </Row>
      <Row>
        <Button
          className="alert-button"
          style={{ width: "100%" }}
          onClick={PopupboxManager.close}
        >
          No
        </Button>
      </Row>
    </Popup>
  );
}

export function renderConfirmPurchasePopup(price) {
  const content = <ConfirmPurchasePopup price={price} />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
      fadeOut: true,
      fadeOutSpeed: 50,
      escClose: false,
      overlayClose: false,
    },
  });
}
