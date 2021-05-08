import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function PurchasablesList({ title, elements }) {
  return (
    <Card>
      <Card.Body>
        <Row className="justify-content-center align-items-center ">
          <Card.Title className="primary-title text-align-center">
            {title}
          </Card.Title>
        </Row>
        <Row className="justify-content-center">
        {elements.map((elem, idx) => {
            <Col>elem</Col>
            {(idx + 1) % 3 == 0 && <div className="w-100"></div>}
        })}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PurchasablesList;
