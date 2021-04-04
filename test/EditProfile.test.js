import { render, screen } from "@testing-library/react";
import React from "react";
import EditProfile from "./EditProfile";
import { BrowserRouter as Router } from "react-router-dom";

import tapete from "./assets/common/boards/green.png";
import logo from "./assets/common/logo/logo.svg";

test("renders EditProfile", () => {
  var username = "Juan Carlos";
  var email = "juanCarlos@gmail.com";

  render(
    <Router>
      <EditProfile
        username={username}
        email={email}
        image={logo}
        boardType={tapete}
      />
    </Router>
  );

  const usernameElement = screen.getByText(username);
  expect(usernameElement).toBeInTheDocument();

  const emailElement = screen.getByText(email);
  expect(emailElement).toBeInTheDocument();

  var buttonElement = screen.getByText(/GUARDAR/i);
  expect(buttonElement).toBeInTheDocument();

  buttonElement = screen.getByText(/Eliminar cuenta/i);
  expect(buttonElement).toBeInTheDocument();
});
