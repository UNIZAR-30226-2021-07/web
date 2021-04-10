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

function App() {
  const [socket, setSocket] = useState(null);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState([]);

  // El token hay que pasarle a todas porque sirve para mantener sesión,
  // si es null se vuelve a login
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login setToken={setToken} setUserData={setUserData} />
        </Route>

        <Route path="/signup" component={SignUp} />

        <ProtectedRoute
          path="/home"
          token={token}
          userData={userData}
          setSocket={setSocket}
          component={Menu}
        />

        <ProtectedRoute
          path="/match"
          token={token}
          socket={socket}
          component={Match}
        />

        <ProtectedRoute
          path="/profile"
          token={token}
          setToken={setToken}
          userData={userData}
          component={Profile}
        />

        <ProtectedRoute
          path="/editProfile"
          token={token}
          setToken={setToken}
          userData={userData}
          setUserData={setUserData}
          component={EditProfile}
        />

        <ProtectedRoute path="/shop" token={token} component={Shop} />

        <ProtectedRoute path="/help" token={token} component={Help} />

        <Route path="/">
          {token != null ? <Redirect to="/home" /> : <Redirect to="/login" />}
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
