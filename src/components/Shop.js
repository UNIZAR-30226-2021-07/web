import React from "react";
import { Row, Col, Container, Image, Card } from "react-bootstrap";

import PurchasablesList from "./PurchasablesList";

import coinImg from "../assets/common/icons/huella.svg";

function Shop() {
  let money = 200;
  return (
    <Container className="justify-content-center h-100">
      <Row>
        <Card className="money-box p-0">
          <Row className="m-0 mb-2 mt-2 ml-3">
            <h5 className="align-self-center my-0">Saldo gatuno: </h5>
            <h5 className="align-self-center my-0 ml-4">{money}</h5>
            <Image className="coin-image-money ml-2" src={coinImg} />
          </Row>
        </Card>
      </Row>
      <Row className="align-items-start mt-4">
        <Col>
          <PurchasablesList title="Tablero" type="board" />
        </Col>
        <Col>
          <PurchasablesList title="Avatar" type="profile_pics" />
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
