import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//import Menu from "./Menu";
import Match from "./Match";
import Login from "./Login";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import SignUp from "./SignUp";
import Shop from "./Shop";
import Help from "./Help";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import tapete from "./assets/common/boards/green.png";
import logo from "./assets/common/logo/logo.svg";

function App() {
  const [logged, setLogged] = useState(false);


  var username = "Juan Carlos";
  var email = "juanCarlos@gmail.com";

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login onLogin={() => setLogged(true)} />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>
      
        <ProtectedRoute path="/home" loggedIn={logged} component={EditProfile}     
                      username={username}
                      email={email}
                      image={logo}
                      boardType={tapete}  />

        <ProtectedRoute path="/match" loggedIn={logged} component={Match} />

        <ProtectedRoute path="/profile" loggedIn={logged} component={Profile} />

        <ProtectedRoute path="/editProfile" loggedIn={logged} component={EditProfile} />

        <ProtectedRoute
          path="/editProfile"
          loggedIn={logged}
          component={EditProfile}
        />

        <ProtectedRoute path="/shop" loggedIn={logged} component={Shop} />

        <ProtectedRoute path="/help" loggedIn={logged} component={Help} />

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
