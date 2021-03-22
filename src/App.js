import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Menu from "./Menu";
import Match from "./Match";
import Login from "./Login";
import EditProfile from "./EditProfile"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [logged, setLogged] = useState(false);

  var username = "Juan Carlos";
  var email = "juanCarlos@gmail.com";
  var games = "15";
  var wins = "7";
  var losts = "8";
  var timePlayed = "145";
  
  return (
    <div className="App">
      <EditProfile username={username}
      email={email}
      games={games}
      wins={wins}
      losts={losts}
      timePlayed={timePlayed}/>
    </div>
  );
}

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default App;
