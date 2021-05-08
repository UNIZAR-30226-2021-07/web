import React from "react";
import { Card, Image } from "react-bootstrap";

//import { getProfile } from "../utils/json";


function PurchasableBox({ picture }) {
  // TODO: Get image to show in the box
  // let profile = getProfile(photo);
  return (
    <Card className="purchasable-component p-0 m-3">
        <Image
            className="purchasable-component-image"
            src={picture}
        />
    </Card>
  );
}

export default PurchasableBox;