import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import PurchasablesList from "./PurchasablesList";

function Shop() {
  return (
    <Container className="justify-content-center h-100">
      <Row>
        <div>Saldo Gatuno 100</div>
      </Row>
      <Row className="align-items-center">
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
