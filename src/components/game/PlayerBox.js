import React from "react";
import { Card, Image } from "react-bootstrap";

import Body from "./Body";

function PlayerBox({username, photo, body}) {
  return (
    <Card className="player-box">
        <Card.Header>
        <Image src={photo}/>
        <h1>{username}</h1>
        </Card.Header>
        <Card.Body>
            <Body cardStacks={body}/>
        </Card.Body>
    </Card>
  );
}

export default PlayerBox;
