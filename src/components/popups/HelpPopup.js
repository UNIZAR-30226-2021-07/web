import React from "react";
import { PopupboxManager } from "react-popupbox";

import Popup from "./PopUp";
import Help from "../Help";

export default function HelpPopup() {

  return (
    <Popup style={{height: "600px"}} close={true}>
        <Help />
    </Popup>
  );
}

export function renderHelpPopup() {
  const content = <HelpPopup/>;
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
