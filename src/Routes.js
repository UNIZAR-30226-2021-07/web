import React from "react";
import Login from "./Login"
import Menu from "./Menu";
import Prueba from "./Prueba";

const routes = {
  "/login": () => <Login />,
  "/prueba": () => <Prueba />,
  "/menu": () => <Menu />
};

export default routes;