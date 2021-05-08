import React from "react";
import { Image, Row, Container, Col, Card /*, Button*/ } from "react-bootstrap";

//import { renderConfirmPurchasePopup } from "./popups/ConfirmPurchasePopup";

import PurchasableBox from "./PurchasableBox";
import coinImg from "../assets/common/icons/huella.svg";

function Shop() {
  let eltIndex = 0;
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
      <Row className="align-items-center">
        <Col>
          <PurchasableBox eltIndex={eltIndex} bought={true} board={true} />
        </Col>
        <Col>
          <PurchasableBox eltIndex={eltIndex} bought={false} board={false} />
        </Col>
      </Row>
    </Container>
  );
  // <Button onClick={() => renderConfirmPurchasePopup(price)}>Tienda</Button>
}

export default Shop;
