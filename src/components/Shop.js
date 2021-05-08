import React from "react";
import { Row, Button } from "react-bootstrap";

//import { renderConfirmPurchasePopup } from "./popups/ConfirmPurchasePopup";


import PurchasableBox from "./PurchasableBox"

function Shop() {
  let boardIndex = 5;
  return (
    <Row>
    <PurchasableBox boardIndex={boardIndex} bought={true}/>
    <PurchasableBox boardIndex={boardIndex} bought={false}/>
    </Row>
  ); 
    // <Button onClick={() => renderConfirmPurchasePopup(price)}>Tienda</Button>
}

export default Shop;
