import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Match() {
  return (
    <Container className="app-container">
      <Container>
        <Row className="align-items-center">
          <Link to="/">
            <Button>Salir de la partida</Button>
          </Link>
        </Row>
      </Container>
    </Container >
  );
}

export default Match;
