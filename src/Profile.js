import React from "react";
import { Container, Row, Col, Card, Button, Image, Table } from "react-bootstrap";

import logo from "./assets/common/logo/logo.png";

function Profile(props) {
  return (
    <Container className="app-container">
      <Card>
         <Card.Body>
            <Row className="align-items-center justify-content-center">
                  <Col>
                    <Row className="align-items-center justify-content-center mb-3">
                      <Card.Title className="primary-title text-align-center">
                            Mi Perfil
                      </Card.Title>
                    </Row>
                    <Row className="align-items-center justify-content-center mb-2">
                        <Image src={logo} className="user-profile-image" roundedCircle thumbnail ></Image>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                      <Card.Text>{props.username}</Card.Text>
                    </Row>
                    <Row className="align-items-center justify-content-center mb-2">
                      <Card.Text>{props.email}</Card.Text>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                      <Button className="tertiary-button">Editar Perfil</Button>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="align-items-center justify-content-center">
                      <Card.Title className="secondary-title text-align-center">
                            Estadísticas
                      </Card.Title>
                    </Row>
                    <Card.Body className="ml-5 align-items-center justify-content-center">
                      <Table>
                        <tbody>
                            <tr>
                              <td>
                                <Card.Title className="tertiary-title">Partidas jugadas:</Card.Title>
                              </td>
                              <td>
                                <Card.Text>{props.games}</Card.Text>
                              </td>
                            </tr>
                            <tr>
                              <td><Card.Title className="tertiary-title">Partidas ganadas:</Card.Title>
                              </td>
                              <td><Card.Text>{props.wins}</Card.Text></td>
                            </tr>
                            <tr>
                              <td><Card.Title className="tertiary-title">Partidas perdidas:</Card.Title>
                              </td>
                              <td><Card.Text>{props.losts}</Card.Text></td>
                            </tr>
                            <tr>
                              <td><Card.Title className="tertiary-title">Tiempo jugado:</Card.Title>
                            </td>
                              <td><Card.Text>{props.timePlayed} min</Card.Text></td>
                            </tr>
                          </tbody>
                        </Table>


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
