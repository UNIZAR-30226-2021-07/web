import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button, Image } from "react-bootstrap";

import oro from "../../assets/common/icons/medalla-oro.svg";
import plata from "../../assets/common/icons/medalla-plata.svg";
import bronce from "../../assets/common/icons/medalla-bronce.svg";
import diploma from "../../assets/common/icons/diploma.svg";
import dinero from "../../assets/common/icons/huella.svg";

import Popup from "./PopUp";

function Player() {
  return (
    <Row className="justify-content-between align-items-center my-2 coins">
      <Image src={diploma} style={{ height: "30px" }} />
      <h5 className="font-weight-bold mx-3 my-0">Jugador 6</h5>
      <h5 className="font-weight-bold my-0">
        10
        <Image className="ml-2" src={dinero} />
      </h5>
    </Row>
  );
}

export default function LeaderboardPopup() {
  const handleClick = (e) => {
    e.preventDefault();
    PopupboxManager.close();
  };

  return (
    <Popup title="Resultados" close={false}>
      <Row className="justify-content-between align-items-center my-2 coins ">
        <Image src={oro} style={{ height: "30px" }} />
        <h5 className="font-weight-bold mx-3 my-0">Jugador 1</h5>
        <h5 className="font-weight-bold my-0">
          50
          <Image className="ml-2" src={dinero} />
        </h5>
      </Row>
      <Row className="justify-content-between align-items-center my-2 coins">
        <Image src={plata} style={{ height: "30px" }} />
        <h5 className="font-weight-bold mx-3 my-0">Jugador 2</h5>
        <h5 className="font-weight-bold my-0">
          30
          <Image className="ml-2" src={dinero} />
        </h5>
      </Row>
      <Row className="justify-content-between align-items-center my-2 coins">
        <Image src={bronce} style={{ height: "30px" }} />
        <h5 className="font-weight-bold mx-3 my-0">Jugador 3</h5>
        <h5 className="font-weight-bold my-0">
          30
          <Image className="ml-2" src={dinero} />
        </h5>
      </Row>
      <Row className="justify-content-between align-items-center my-2 coins">
        <Image src={diploma} style={{ height: "30px" }} />
        <h5 className="font-weight-bold mx-3 my-0">Jugador 4</h5>
        <h5 className="font-weight-bold my-0">
          10
          <Image className="ml-2" src={dinero} />
        </h5>
      </Row>
      <Row className="justify-content-between align-items-center my-2 coins">
        <Image src={diploma} style={{ height: "30px" }} />
        <h5 className="font-weight-bold mx-3 my-0">Jugador 5</h5>
        <h5 className="font-weight-bold my-0">
          10
          <Image className="ml-2" src={dinero} />
        </h5>
      </Row>
      <Player>
      <Row>
        <Button className="primary-button w-100 mt-2" onClick={handleClick}>
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
