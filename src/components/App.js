import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import io from "socket.io-client";

import Menu from "./Menu";
import Match from "./Match";
import Login from "./Login";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import SignUp from "./SignUp";
import Shop from "./Shop";
import Help from "./Help";

import { getUserData } from "../utils/api";

import { SessionContext } from "./SessionProvider";

function App() {
  const session = useContext(SessionContext);

  useEffect(() => {
    if (!session.token || session.userData.length !== 0) {
      return;
    }
    console.log("fetching user data");
    // Se piden los datos del usuario
    getUserData(session)
      .then((response) => {
        if ("error" in response) {
          console.error(response);
        } else {
          session.setUserData({
            email: response.email,
            name: response.name,
            coins: response.coins,
            picture: response.picture,
            board: response.board,
            purchases: response.purchases,
          });
        }
      })
      .catch((status) => {
        if (status === 401) {
          session.setToken(null);
        }
      });
  }, [session.token]);

  useEffect(() => {
    if (session.token != null) {
      session.socket.current = io.connect("wss://gatovid.herokuapp.com", {
        extraHeaders: {
          Authorization: "Bearer " + session.token,
        },
      });

      console.log(session.socket.current);
      session.socket.current.on("connect", function () {
        console.log("connected");
      });

      session.socket.current.on("connect_error", function (e) {
        console.error("not connected", e);
      });

      /*
      session.socket.current.on("chat", function ({ owner, msg }) {
        console.log(owner, msg);
        setMessages((prev) => [...prev, { userid: owner, text: msg }]);
      });
      */
      return () => {
        session.socket.current.close();
        session.socket.current = null;
      };
    }
  }, [session.token]);
  // De esta forma el useEffect se ejecutará si cambia el token, volviendo
  // a hacer el connect

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
