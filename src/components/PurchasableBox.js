import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";

import { getBoard } from "../utils/json";

import lock from "../assets/common/icons/candado.svg";
import coinImg from "../assets/common/icons/huella.svg";
//import check from "../assets/common/icons/check.svg";

function PurchasableBox({ boardIndex, bought }) {
  // TODO: Get image to show in the box
  let [board, boardPrice, boardName] = getBoard(boardIndex);

  console.log(board, boardPrice, boardName, bought);

  return (
    <Card className="purchasable-component p-0 m-3">
      <Card.Img className="purchasable-component-image" src={board} rounded />
      <Card.ImgOverlay className="align-items-center justify-content-center">
        <Row className="align-items-center justify-content-center">
          <Image className="lock-image" src={lock} />
        </Row>
        <Row className="align-items-center justify-content-center">
          <Card className="coins-box">
            <Row className="p-0 m-0 ml-2">
              <Col className="p-0 flex-grow-0">{boardPrice}</Col>
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
