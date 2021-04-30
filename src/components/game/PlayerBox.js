import React from "react";
import { Row, Card, Image } from "react-bootstrap";

import profile_pics from "../../assets/common/profile_pics.json";

import Body from "./Body";

function PlayerBox({ username, photo, body }) {
  let profile = process.env.PUBLIC_URL + "/" + profile_pics[photo].image;
  return (
    <Card className="player-box">
      <Card.Body className="player-body p-0">
        <Card.Title>
          <Row className="mx-0 justify-content-center flex-nowrap">
            <Image
              className="player-image mr-4 border border-dark"
              src={profile}
              roundedCircle
            />
            <h4 className="align-self-center my-0">{username} </h4>
          </Row>
        </Card.Title>
        <Body cardStacks={body} kind="rival" />
      </Card.Body>
    </Card>
  );
}

export default PlayerBox;
