import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Menu from "./Menu";
import Match from "./Match";
import Login from "./Login";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login onLogin={() => setLogged(true)} />
        </Route>

        <ProtectedRoute path="/home" loggedIn={logged} component={Menu} />

        <ProtectedRoute path="/match" loggedIn={logged} component={Match} />

        <Route path="/">
          {logged ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route {...rest} render={
      props => loggedIn ? <Component {...rest} {...props} /> : <Redirect to='/login' />
    } />
  )
};

export default App;
