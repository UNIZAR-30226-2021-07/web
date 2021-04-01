import { render, screen } from "@testing-library/react";
import React from "react";
import Menu from "./Menu";

import { BrowserRouter as Router } from "react-router-dom";

test("renders create game", () => {
  render(
    <Router>
      <Menu />
    </Router>
  );
  const buttonElement = screen.getByText(/crear partida privada/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders title", () => {
  render(
    <Router>
      <Menu />
    </Router>
  );
  const titleElement = screen.getByText(/gatovid/i);
  expect(titleElement).toBeInTheDocument();
});
