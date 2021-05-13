import React from "react";
import { PopupboxManager } from "react-popupbox";

import Popup from "./PopUp";

export default function LeaveGamePopup({ token }) {
  return (
    <Popup title="¿Quieres salir?">
    </Popup>
  );
}

export function renderLeaveGamePopup({ token }) {
  const content = <LeaveGamePopup token={token} />;
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
