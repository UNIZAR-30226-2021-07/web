import React from "react";
import { Row, Card, Image } from "react-bootstrap";

//import { getProfile } from "../utils/json";


function PurchasableBox({ picture }) {
  // TODO: Get image to show in the box
  // let profile = getProfile(photo);
  return (
    <Card className="w-100">
      <Card.Body className="align-items-center justify-content-center">
          <Row className="mx-0 justify-content-center flex-nowrap">
            <Image
              className="purchasable-component-image"
              src={picture}
            />
          </Row>
      </Card.Body>
    </Card>
  );
}

export default PurchasableBox;