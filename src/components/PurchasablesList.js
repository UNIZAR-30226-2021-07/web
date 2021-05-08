import React, { useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";

import PurchasableBox from "./PurchasableBox";

import boards from "../assets/common/boards.json";
import profile_pics from "../assets/common/profile_pics.json";

import { SessionContext } from "./SessionProvider";

function PurchasablesList({ title, type }) {
  const session = useContext(SessionContext);

  //Comprueba si el elemento esta comprado
  const isBought = (id) => {
    return session.userData.purchases.some(
      (elem) => elem.type == type && elem.item_id == id
    );
  };

  if (type == "board") {
    var elements = boards;
  } else if (type == "profile_pic") {
    elements = profile_pics;
  }

  return (
    <Card>
      <Card.Body>
        <Row className="justify-content-center align-items-center ">
          <Card.Title className="primary-title text-align-center">
            {title}
          </Card.Title>
        </Row>
        <Row className="justify-content-center">
          {elements.map((elem, idx) => (
            <Col key={idx}> 
            <PurchasableBox picture={idx} bought={isBought(idx)} />
          </Col>
          ))}       
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PurchasablesList;
