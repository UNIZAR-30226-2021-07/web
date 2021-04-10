import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { deleteUser } from "../../utils/api";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";

export default function DeleteAccountPopup({ token, setToken }) {
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();

    const response = await deleteUser({ token });

    if ("message" in response) {
      setToken(null);
      PopupboxManager.close()
      history.push("/login");
    
    } else {
      renderErrorPopup(response.error);
    }
  };

  return (
    <Popup title="¿Eliminar su cuenta">
      <Row className="align-items-center justify-content-center">
        <h2 className="popup-title mb-0">permanentemente?</h2>
      </Row>
      <Row>
        <Button
          className="alert-button mb-3 mt-4"
          style={{ width: "100%" }}
          onClick={handleClick}
        >
          Sí
        </Button>
      </Row>
      <Row>
        <Button
          className="tertiary-button"
          style={{ width: "100%" }}
          onClick={PopupboxManager.close}
        >
          No
        </Button>
      </Row>
    </Popup>
  );
}

export function renderDeleteAccountPopup({ token, setToken }) {
  const content = <DeleteAccountPopup token={token} setToken={setToken} />;
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
