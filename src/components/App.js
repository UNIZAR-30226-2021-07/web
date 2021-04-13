import React, { useState, useEffect, useRef } from "react";
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


function App() {
  // NOTA: Parámetros a pasar con el contexto, para evitar parametrización
  // - Token
  // - Socket
  // - userData? -> no se si hacerlo ya con todos

  // Para poder coger el valor que se le asigna desde el useEffect
  // con current se referencia a este objeto desde fuera
  const socket = useRef(null);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if(token != null) {
      socket.current = io.connect("ws://gatovid.herokuapp.com", {
        extraHeaders: {
          Authorization: "Bearer " + token,
        },
      });
  
      socket.current.on("connect", function () {
        console.log("connected");
      });
  
      socket.current.on("connect_error", function (e) {
        console.error("not connected", e);
      });
  
      socket.current.on("start_game", function () {
        alert("Game started");
      });
  
      socket.current.on("players_waiting", function (n) {
        console.log(n);
      });
      /*
      socket.current.on("chat", function ({ owner, msg }) {
        console.log(owner, msg);
        setMessages((prev) => [...prev, { userid: owner, text: msg }]);
      });
      */
      return () => {
        socket.current.close();
        socket.current = null;
      };
    }
  }, [token]);
    // De esta forma el useEffect se ejecutará si cambia el token, volviendo
    // a hacer el connect
  


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
          socket={socket}
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
