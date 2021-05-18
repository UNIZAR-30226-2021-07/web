import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Button, Image } from "react-bootstrap";

import oro from "../../assets/common/icons/medalla-oro.svg";
import plata from "../../assets/common/icons/medalla-plata.svg";
import bronce from "../../assets/common/icons/medalla-bronce.svg";
import diploma from "../../assets/common/icons/diploma.svg";
import dinero from "../../assets/common/icons/huella.svg";

import Popup from "./PopUp";

export default function LeaderboardPopup() {
  const leaderboard = {
    manolo22: {
      position: 1,
      coins: 60,
    },
    juan: {
      position: 2,
      coins: 50,
    },
    pedro: {
      position: 3,
      coins: 40,
    },
    daniel: {
      position: 4,
      coins: 30,
    },
    jaime: {
      position: 5,
      coins: 20,
    },
    carmen: {
      position: 6,
      coins: 10,
    },
  };

  let players = Object.keys(leaderboard);

  const handleClick = (e) => {
    e.preventDefault();
    PopupboxManager.close();
  };

  return (
    <Popup title="Resultados" close={false}>
      {players.map((player, idx) => {
        let position = leaderboard[player].position;
        let coins = leaderboard[player].coins;

        return (
          <Row
            key={idx}
            className="justify-content-between align-items-center my-2 coins"
          >
            <Image
              src={
                position == 1
                  ? oro
                  : position == 2
                  ? plata
                  : position == 3
                  ? bronce
                  : diploma
              }
              style={{ height: "30px" }}
            />
            <h5 className="font-weight-bold mx-3 my-0">{player}</h5>
            <h5 className="font-weight-bold my-0">
              {coins}
              <Image className="ml-2" src={dinero} />
            </h5>
          </Row>
        );
      })}
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
