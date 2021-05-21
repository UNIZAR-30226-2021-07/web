import React from "react";
import { PopupboxManager } from "react-popupbox";
import ScrollView from 'devextreme-react/scroll-view';

import Popup from "./PopUp";
import Help from "../Help";

export default function HelpPopup() {

  return (
    <Popup close={true}>
        <ScrollView width="100%" height="100%">
            <Help />
        </ScrollView>
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
