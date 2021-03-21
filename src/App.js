import React, { useState } from 'react';

import Menu from './Menu';
import Login from './Login';
import Chat from './Chat';
import {Row, Col } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <Row>
      <Col xs={8}></Col>
      <Col>
        <Chat />
      </Col>
    </Row>
  );
}

export default App;
