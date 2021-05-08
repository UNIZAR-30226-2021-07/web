import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import PurchasableBox from "./PurchasableBox";

import boards from "../assets/common/boards.json";
import profile_pics from "../assets/common/profile_pics.json";

function PurchasablesList({ title, type }) {
  let elements = type == "board" ? boards : profile_pics;

  return (
    <Card>
      <Card.Body>
        <Row className="justify-content-center align-items-center ">
          <Card.Title className="primary-title text-align-center">
            {title}
          </Card.Title>
        </Row>
        <Row className="justify-content-start shop-list">
          {elements.map((elem, idx) => (
            <Col key={idx} md={4}>
              <PurchasableBox index={idx} type={type} />
            </Col>
          ))}
          {/*Solo para probar cuando hay demasiados elementos*/}
          {elements.map((elem, idx) => (
            <Col key={idx} md={4}>
              <PurchasableBox index={idx} type={type} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PurchasablesList;
