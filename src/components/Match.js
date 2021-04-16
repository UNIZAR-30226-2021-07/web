import React, {useContext} from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Chat from "./Chat";
import { renderErrorPopup } from "./popups/ErrorPopup";
import { SessionContext } from "./SessionProvider";

function Match() {
  const session = useContext(SessionContext);

  const handleClick = () => {
    session.socket.current.emit("leave", (response) => {
      console.log('Adios')
      if (response && response.error) {
        renderErrorPopup(response.error);
      }
    });
  };
  return (
    <Row className="m-0">
      <Col>
        <Container className="app-container">
          <Row className="h-100">
            <Col className="md-9">
              <Link to="/">
                <Button onClick={handleClick}>Salir de la partida</Button>
              </Link>
            </Col>
            <Col className="md-3"></Col>
          </Row>
        </Container>
      </Col>
      <Col className="p-0">
        <Chat />
      </Col>
    </Row>
  );
}

export default Match;
