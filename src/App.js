import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//import Menu from "./Menu";
import Match from "./Match";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

import "./style.css";
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
      <Switch>
        <Route path="/login">
          <Login onLogin={() => setLogged(true)} />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>
      
        <ProtectedRoute path="/home" loggedIn={logged} component={Profile}     
                        username={username}
                        email={email}
                        games={games}
                        wins={wins}
                        losts={losts}
                        timePlayed={timePlayed}  />

        <ProtectedRoute path="/match" loggedIn={logged} component={Match} />

        <ProtectedRoute path="/editProfile" loggedIn={logged} component={EditProfile} />

        <Route path="/">
          {logged ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
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
