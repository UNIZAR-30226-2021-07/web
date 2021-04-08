import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Popup from "./PopUp";
import { renderErrorPopup } from "./ErrorPopup";

async function deleteUser({ token }) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return fetch("https://gatovid.herokuapp.com/data/remove_user", requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default function DeleteAccountPopup({ token, setToken }) {
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();

    const [[a, b], code] = await deleteUser({ token, setToken });
    
      console.log("Respuesta:" + a + ", código: " + code)
      if ("message" == a) {
        setToken(null);
        history.push("/login");
      } else {
        renderErrorPopup(b.error);
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

export function renderDeleteAccountPopup() {
  const content = <DeleteAccountPopup />;
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
      escClose: false,
      overlayClose: false,
    },
  });
}
