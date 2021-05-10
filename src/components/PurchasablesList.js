import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import PurchasableBox from "./PurchasableBox";

import boards from "../assets/common/boards.json";
import profile_pics from "../assets/common/profile_pics.json";

function PurchasablesList({ title, type }) {
  let elements = type == "board" ? boards : profile_pics;
  // Limit profile_pics to show, all except last: reserved for IA
  const elemsLength = elements.length;
  const rangeIA = type == "board" ? false : true;

  return (
    <Card className="shop-card">
      <Card.Body>
        <Row className="justify-content-center align-items-center ">
          <Card.Title className="primary-title text-align-center">
            {title}
          </Card.Title>
        </Row>
        <Row className="justify-content-start">
          {elements.map((elem, idx) =>
            rangeIA && idx == elemsLength - 1 ? null : (
              <Col key={idx} sm={12} md={6} lg={4}>
                <PurchasableBox index={idx} type={type} />
              </Col>
            )
          )}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PurchasablesList;
