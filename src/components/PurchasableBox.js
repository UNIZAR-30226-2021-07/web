import React, {useContext} from "react";
import { Card, Image, Row, Col } from "react-bootstrap";

import { getBoard } from "../utils/json";
import { getAvatar } from "../utils/json";

import lock from "../assets/common/icons/candado.svg";
import coinImg from "../assets/common/icons/huella.svg";
import check from "../assets/common/icons/check.svg";

import { SessionContext } from "./SessionProvider";

function PurchasableBox({ index, type }) {
  const session = useContext(SessionContext);

  //Comprueba si el elemento esta comprado
  const isBought = (id) => {
    return session.userData.purchases.some(
      (elem) => elem.type == type && elem.item_id == id
    );
  };

  let [elt, eltPrice] = type == "board" ? getBoard(index) : getAvatar(index);

  return isBought(index) ? (
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
