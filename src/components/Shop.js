import React from "react";
import { Row/*, Button*/ } from "react-bootstrap";

//import { renderConfirmPurchasePopup } from "./popups/ConfirmPurchasePopup";


import PurchasableBox from "./PurchasableBox"

function Shop() {
  let eltIndex = 4;
  return (
    <Row>
    <PurchasableBox eltIndex={eltIndex} bought={true} board={true}/>
    <PurchasableBox eltIndex={eltIndex} bought={false} board={false}/>
    </Row>
  ); 
    // <Button onClick={() => renderConfirmPurchasePopup(price)}>Tienda</Button>
}

export default Shop;
