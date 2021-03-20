import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState } from 'react';

import Menu from './Menu';
import Match from './Match';
import Login from './Login';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>

        <Route path="/match">
          <Match />
        </Route>

        // La página de login solo saldrá la primera vez. En caso contrario, se
        // redirigirá al menú principal.
        <Route path="/">
          {logged ? <Redirect to="/menu" /> : <Login onLogin={() => setLogged(true)} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
