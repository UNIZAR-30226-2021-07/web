import React from "react";
import { PopupboxManager } from "react-popupbox";

export default function openPopupbox(title) {
  const content = (
    <dev>
      <h1>{title}</h1>
      <button
        type="button"
        class="btn btn-danger"
        onClick={PopupboxManager.close()}
      >
        Cancelar
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        onClick={PopupboxManager.close()}
      >
        Aceptar
      </button>
    </dev>
  );
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
}
