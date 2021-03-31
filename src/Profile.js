import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

import logo from "./assets/common/logo/logo.png";

function Profile(props) {
  return (
    <Container className="app-container">
      <Card>
         <Card.Body>
                <Row>
                  <Col>
                    <Row className="align-items-center justify-content-center">
                      <Card.Title className="primary-title text-align-center">
                            Mi Perfil
                      </Card.Title>
                    </Row>
                    <br></br>
                    <Row className="align-items-center justify-content-center">
                        <Image src={logo} className="user-profile-image" roundedCircle thumbnail ></Image>
                    </Row>
                    <br></br>
                    <Row className="align-items-center justify-content-center">
                      <Card.Text>{props.username}</Card.Text>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                      <Card.Text>{props.email}</Card.Text>
                    </Row>
                    <br></br>
                    <Row className="align-items-center justify-content-center">
                      <Button className="tertiary-button">Editar Perfil</Button>
                    </Row>
                  </Col>
                  <Col className=" 
                                    margin-top: 10%">
                    <Row className="align-items-center justify-content-center">
                      <Card.Title className="secondary-title text-align-center">
                            Estadísticas
                      </Card.Title>
                    </Row>
                    <Card.Body>
                        <Row className="align-items-center justify-content-center">
                          <Col sm={8}>
                            <Card.Text>Partidas jugadas </Card.Text>
                          </Col>
                          <Col sm={4}>
                            <Card.Text>{props.games}</Card.Text>
                          </Col>
                        </Row>
                        <Row
                          md={20}
                          className="align-items-center justify-content-center"
                        >
                          <Col sm={8}>
                            <Card.Text>Partidas ganadas</Card.Text>
                          </Col>
                          <Col sm={4}>
                            <Card.Text>{props.wins}</Card.Text>
                          </Col>
                        </Row>
                        <Row className="align-items-center justify-content-center">
                          <Col sm={8}>
                            <Card.Text>Partidas perdidas</Card.Text>
                          </Col>
                          <Col sm={4}>
                            <Card.Text>{props.losts}</Card.Text>
                          </Col>
                        </Row>
                        <Row className="align-items-center justify-content-center">
                          <Col sm={8}>
                            <Card.Text>Tiempo jugado</Card.Text>
                          </Col>
                          <Col sm={4}>
                            <Card.Text>{props.timePlayed} min</Card.Text>
                          </Col>
                        </Row>
                      </Card.Body>
                      <Card.Body>
                        <Row className="align-items-center justify-content-center">
                          <Button className="alert-button">Cerrar Sesión</Button>
                        </Row>
                      </Card.Body>
                  </Col>
                </Row>
          </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
