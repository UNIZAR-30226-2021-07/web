import React, { useContext } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button, Image } from "react-bootstrap";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";
import { shopBuy, getUserData } from "../../utils/api";
import { SessionContext } from "../SessionProvider";

import coins from "../../assets/common/icons/huella.svg";

export default function ConfirmPurchasePopup({ id, type, price }) {
  const session = useContext(SessionContext);

  const handleClick = async (e) => {
    e.preventDefault();

    let data = new URLSearchParams();
    data.append(`id`, id);
    data.append(`type`, type);

    const response = await shopBuy({
      token: session.token,
      data,
      setToken: session.setToken,
    });

    if (response != null) {
      if ("message" in response) {
        // Update local user_data as server has just updated
        getUserData(session).then((response) => {
          if (response != null) {
            if ("error" in response) {
              console.error(response.error);
            } else {
              session.setUserData({
                email: response.email,
                name: response.name,
                coins: response.coins,
                picture: response.picture,
                board: response.board,
                purchases: response.purchases,
              });
            }
          }
        });
        PopupboxManager.close();
      } else {
        renderErrorPopup(response.error);
      }
    }
  };

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
          onClick={handleClick}
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

export function renderConfirmPurchasePopup(id, type, price) {
  const content = <ConfirmPurchasePopup id={id} type={type} price={price} />;
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
