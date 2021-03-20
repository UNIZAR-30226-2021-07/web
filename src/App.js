import React, { useState } from 'react';
import {useRoutes} from 'hookrouter';
//import Routes from './Routes';

import Menu from './Menu';
import Login from './Login';
import Prueba from "./Prueba";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [logged, setLogged] = useState(false);
  const routes = {
    "/": () => {logged ? <Menu /> : <Login onLogin={() => setLogged(true)} />},
    "/login": () => <Login />,
    "/prueba": () => <Prueba />,
    "/menu": () => <Menu />
  };
  
  const routeResult = useRoutes(routes);

  return (routeResult);
}

export default App;
