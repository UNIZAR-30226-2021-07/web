import { render, screen } from "@testing-library/react";
import React from "react";
import EditProfile from "./EditProfile";

import tapete from "./images/tapete.png";
import logo from "./logo.svg";

test("renders EditProfile", () => {
  var username = "Juan Carlos";
  var email = "juanCarlos@gmail.com";

  render(
    <EditProfile
      username={username}
      email={email}
      image={logo}
      boardType={tapete}
    />
  );

  const usernameElement = screen.getByText(username);
  expect(usernameElement).toBeInTheDocument();

  const emailElement = screen.getByText(email);
  expect(emailElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/GUARDAR/i);
  expect(buttonElement).toBeInTheDocument();
});
