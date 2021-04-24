import React, { useContext, useEffect } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Table from "./game/Table";
import Mano from "./game/Mano";
import Card from "./game/Card";
import Chat from "./Chat";
//import CardStack from "./game/CardStack";
//import Hand from "./game/Hand";
//import Body from "./game/Body";

import { renderPausePopup } from "./popups/PausePopup";
import { SessionContext } from "./SessionProvider";

import pause from "../assets/common/icons/pause.svg";
import exit from "../assets/common/icons/logout.svg";
import help from "../assets/common/icons/help.svg";

function Match() {
  const session = useContext(SessionContext);
  const history = useHistory();

  useEffect(() => {
    // If socket null, (e.g. when disconnected) go back to menu
    if (!session.socket.current) {
      session.setUpdateSocket((session.updateSocket + 1) % 2);
      history.push("/home");
    }
  }, []);

  const leaveGame = async (e) => {
    e.preventDefault();
    session.socket.current.emit("leave", (data) => {
      if (data && data.error) {
        console.error(data.error);
      } else {
        // When leaving, change updateSocket to get a new socket
        session.setUpdateSocket((session.updateSocket + 1) % 2);
        history.push("/home");
      }
    });
  };

  // ---------------------------------------------------------------------------
  /*
  const cardsStack = [
    { type: "body", number: "0" },
    { type: "body", number: "1" },
  ];
  // F: Pruebas Hand
  const cardsHand = [{ number: "0" }, { number: "1" }, { number: "2" }];

  const cardBody = [cardsStack, cardsStack, cardsStack, cardsStack];
*/

  const cardsHand = [{ id: "card-hand-1", number: "0", draggable: "true" }, 
                      { id: "card-hand-2", number: "1", draggable: "true" },
                      { id: "card-hand-3", number: "2", draggable: "true" }];


  return (
    <Row className="m-0">
      <Col>
        <Container className="app-container">
          <Row className="w-100 justify-content-between no-wrap">
            <Image src={exit} className="game-icon" onClick={leaveGame} />
            <Image
              src={pause}
              className="game-icon"
              onClick={renderPausePopup}
            />s
            <Image
              src={help}
              className="game-icon"
              onClick={() => {
                alert("Help");
              }}
            />
          </Row>
          {/*  
          <Row>
            <Col>
              <CardStack cards={cardsStack} />
            </Col>
            <Col>
              <Hand cards={cardsHand} />
            </Col>
            <Col>
              <Body cardStacks={cardBody} />
            </Col>
          </Row>
          */}
          <Row className="flexbox">
            <Table id="table-1" className="table">
              <Card id="carta-1" number="2" type="hand" draggable="false" />
            </Table>
            <Mano id="mano" cards={cardsHand}/>
          </Row>
        </Container>
      </Col>
      <Col className="p-0">
        <Chat />
      </Col>
    </Row>
  );
}

export default Match;
