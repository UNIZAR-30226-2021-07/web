import React from "react";
import {Row} from "react-bootstrap";

import PurchasableBox from "./PurchasableBox"

import board_pic from "../assets/common/boards/blue.svg";

function Shop() {
  return (
    <Row>
    <PurchasableBox picture={board_pic}/>
    <PurchasableBox picture={board_pic}/>
    </Row>
  ); 
}

export default Shop;
