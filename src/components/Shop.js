import React from "react";
import {Row} from "react-bootstrap";

import PurchasableBox from "./PurchasableBox"

function Shop() {
  let boardIndex = 5;
  return (
    <Row>
    <PurchasableBox boardIndex={boardIndex} bought={true}/>
    <PurchasableBox boardIndex={boardIndex} bought={false}/>
    </Row>
  ); 
}

export default Shop;
