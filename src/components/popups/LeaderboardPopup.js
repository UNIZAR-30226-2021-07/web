import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button} from "react-bootstrap";

import Popup from "./PopUp";

export default function LeaderboardPopup() {

  const handleClick = (e) => {
    e.preventDefault();
    PopupboxManager.close();
  };

  return (
    <Popup title="Resultados" close={false}>
      <Row>
        <Button className="primary-button w-100" onClick={handleClick}>
          Cerrar
        </Button>
      </Row>
    </Popup>
  );
}

export function renderLeaderboardPopup({ socket }) {
  const content = <LeaderboardPopup socket={socket} />;
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
