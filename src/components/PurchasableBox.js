import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";

import { getBoard } from "../utils/json";
import { getAvatar } from "../utils/json";

import lock from "../assets/common/icons/candado.svg";
import coinImg from "../assets/common/icons/huella.svg";
import check from "../assets/common/icons/check.svg";

function PurchasableBox({ eltIndex, bought, board }) {
  let elt, eltPrice;
  if (board) {
    [elt, eltPrice] = getBoard(eltIndex);
  } else {
    [elt, eltPrice] = getAvatar(eltIndex);
  }

  return bought ? (
    <Card className="purchasable-component p-0 m-3">
      <Card.Img
        className="purchasable-component-image"
        src={elt}
        rounded="true"
      />
      <Card.ImgOverlay className="align-items-center justify-content-center">
        <Image className="check-image" src={check} roundedCircle />
      </Card.ImgOverlay>
    </Card>
  ) : (
    <Card className="purchasable-component p-0 m-3">
      <Card.Img
        className="purchasable-component-image"
        src={elt}
        rounded="true"
      />
      <Card.ImgOverlay className="align-items-center justify-content-center">
        <Row className="align-items-center justify-content-center">
          <Image className="box-image" src={lock} />
        </Row>
        <Row className="align-items-center justify-content-center">
          <Card className="coins-box">
            <Row className="p-0 m-0 ml-2">
              <Col className="p-0 flex-grow-0">{eltPrice}</Col>
              <Col className="p-0 flex-grow-0 ml-1 mr-2">
                <Image className="coin-image" src={coinImg} />
              </Col>
            </Row>
          </Card>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
}

export default PurchasableBox;