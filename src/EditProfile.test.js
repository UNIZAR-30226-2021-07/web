import { render, screen } from "@testing-library/react";
import React from "react";
import EditProfile from "./EditProfile";

test("renders EditProfile", () => {
  var username = "Juan Carlos";
  var email = "juanCarlos@gmail.com";
  var boardColor = "#05ff82";

  render(
    <EditProfile username={username}
      email={email}
      boardColor={boardColor}/>
  );

  const usernameElement = screen.getByText(username);
  expect(usernameElement).toBeInTheDocument();

  const emailElement = screen.getByText(email);
  expect(emailElement).toBeInTheDocument();

  const boardColorElement = screen.getByText(boardColor);
  expect(boardColorElement).toBeInTheDocument();
});