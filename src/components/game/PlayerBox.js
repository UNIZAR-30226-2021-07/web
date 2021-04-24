import React from "react";
import { Row, Card, Image } from "react-bootstrap";

import Body from "./Body";

function PlayerBox({ username, photo, body }) {
  return (
    <Card className="player-box">
      <Card.Body className="player-body p-0">
        <Card.Title>
          <Row className="mx-0 justify-content-center flex-nowrap">
            <Image className="player-image mr-4" src={photo} />
            <h4 className="align-self-center my-0">{username} </h4>
          </Row>
        </Card.Title>
          <Body cardStacks={body} />
      </Card.Body>
    </Card>
  );
}

export default PlayerBox;
