import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Menu from "./Menu";
import Match from "./Match";
import Login from "./Login";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import SignUp from "./SignUp";
import Shop from "./Shop";
import Help from "./Help";

import { SessionContext } from "./SessionProvider";

function App() {
  const session = useContext(SessionContext);

  // El token hay que pasarle a todas porque sirve para mantener sesión,
  // si es null se vuelve a login
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup" component={SignUp} />

        <ProtectedRoute path="/home" token={session.token} component={Menu} />

        <ProtectedRoute path="/match" token={session.token} component={Match} />

        <ProtectedRoute
          path="/profile"
          token={session.token}
          component={Profile}
        />

        <ProtectedRoute
          path="/editProfile"
          token={session.token}
          component={EditProfile}
        />

        <ProtectedRoute path="/shop" token={session.token} component={Shop} />

        <ProtectedRoute path="/help" token={session.token} component={Help} />

        <Route path="/">
          {session.token != null ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </div>
  );
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.token != null ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default App;
