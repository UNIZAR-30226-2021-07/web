import React from "react";
// import { Route, Redirect } from "react-router-dom";

//import Menu from "./Menu";
//import Match from "./Match";
//import Login from "./Login";
import EditProfile from "./EditProfile"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [logged, setLogged] = useState(false);

  var username = "Juan Carlos";
  var email = "juanCarlos@gmail.com";
  var boardColor = "#05ff82";
  return (
    <div className="App">
      <EditProfile username={username}
      email={email}
      boardColor={boardColor}/>
    </div>
  );
}

/*
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
*/
export default App;
