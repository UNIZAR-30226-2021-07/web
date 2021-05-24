import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Image, Card } from "react-bootstrap";

import PurchasablesList from "./PurchasablesList";
import { SessionContext } from "./SessionProvider";

import coinImg from "../assets/common/icons/huella.svg";

function Shop() {
  const session = useContext(SessionContext);
  const [coins, setCoins] = useState(0);

  // Check if element is selected
  useEffect(() => {
    console.log(session.userData.coins);
    if (session.userData.coins) {
      setCoins(session.userData.coins);
    }
  }, [session.userData.coins]);

  return (
    <Container className="justify-content-center h-100 d-flex-column">
      <Row className="pt-2 m-0">
        <Card className="money-box px-1 py-0">
          <Row className="m-0 mb-2 mt-2 ml-3">
            <h5 className="align-self-center my-0 font-weight-bold">
              Saldo gatuno: {coins}
            </h5>
            <Image className="coin-image-money ml-2" src={coinImg} />
          </Row>
        </Card>
      </Row>
      <Row className="align-items-start mt-2">
        <Col>
          <PurchasablesList title="Tablero" type="board" />
        </Col>
        <Col>
          <PurchasablesList title="Avatar" type="profile_pic" />
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
