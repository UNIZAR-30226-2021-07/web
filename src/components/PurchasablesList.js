import React from "react";
import { Card, Row,Col } from "react-bootstrap";

function PurchasablesList({title}) {
  return (
    <Card className="w-100">
      <Card.Body>
        <Row className="justify-content-center align-items-center ">
          <Card.Title className="primary-title text-align-center">
            {title}
          </Card.Title>
        </Row>
        <Row className="justify-content-center">
          <Col>Element</Col>
          <Col>Element</Col>
          <Col>Element</Col>
          <div className="w-100"></div>
          <Col>Element</Col>
          <Col>Element</Col>
          <Col>Element</Col>
          <div className="w-100"></div>
          <Col>Element</Col>
          <Col>Element</Col>
          <Col>Element</Col>
          <div className="w-100"></div>
          <Col>Element</Col>
          <Col>Element</Col>
          <Col>Element</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PurchasablesList;
