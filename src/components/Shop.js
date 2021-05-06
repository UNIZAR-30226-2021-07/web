import React from "react";
import { Button } from "react-bootstrap";

import { renderConfirmPurchasePopup } from "./popups/ConfirmPurchasePopup";

function Shop() {
  let price = 10;
  return (
    <Button onClick={() => renderConfirmPurchasePopup(price)}>Tienda</Button>
  );
}

export default Shop;
