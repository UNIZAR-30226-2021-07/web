import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Menu from "./Menu";
import Match from "./Match";
import Login from "./Login";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import SignUp from "./SignUp";
import Shop from "./Shop";
import Help from "./Help";

import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login setToken={setToken} />
          {(token != null) ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <ProtectedRoute path="/home" token={token} component={Menu} />

        <ProtectedRoute path="/match" token={token} component={Match} />

        <ProtectedRoute path="/profile" token={token} setToken={setToken} component={Profile} />

        <ProtectedRoute
          path="/editProfile"
          token={token}
          component={EditProfile}
        />

        <ProtectedRoute path="/shop" token={token} component={Shop} />

        <ProtectedRoute path="/help" token={token} component={Help} />

        <Route path="/">
          {(token != null) ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        (token != null) ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default App;
