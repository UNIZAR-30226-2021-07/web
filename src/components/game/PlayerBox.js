import React from "react";
import { Row, Card, Image } from "react-bootstrap";

import { getProfile } from "../../utils/json";

import Body from "./Body";

function PlayerBox({ username, photo, body }) {
  let profile = getProfile(photo);
  return (
    <Card className="player-box p-1 pb-2 m-3">
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
        <Body cardStacks={body} kind="rival" username={username} />
      </Card.Body>
    </Card>
  );
}

export default PlayerBox;
