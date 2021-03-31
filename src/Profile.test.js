import { render, screen } from "@testing-library/react";
import React from "react";
import Profile from "./Profile";
import { BrowserRouter as Router } from "react-router-dom";

test("renders profile", () => {
  var username = "Juan Carlos";
  var email = "juanCarlos@gmail.com";
  var games = "15";
  var wins = "7";
  var losts = "8";
  var timePlayed = "145";
  render(
    <Router>
      <Profile
        username={username}
        email={email}
        games={games}
        wins={wins}
        losts={losts}
        timePlayed={timePlayed}
      />
    </Router>
  );
  const usernameElement = screen.getByText(username);
  expect(usernameElement).toBeInTheDocument();
  const emailElement = screen.getByText(email);
  expect(emailElement).toBeInTheDocument();
  const gamesElement = screen.getByText(games);
  expect(gamesElement).toBeInTheDocument();
  const winsElement = screen.getByText(wins);
  expect(winsElement).toBeInTheDocument();
  const lostsElement = screen.getByText(losts);
  expect(lostsElement).toBeInTheDocument();
  const timePlayedElement = screen.getByText(timePlayed + " min");
  expect(timePlayedElement).toBeInTheDocument();
});
