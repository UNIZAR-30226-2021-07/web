import { render, screen } from "@testing-library/react";
import React from "react";
import Menu from "../components/Menu";

import { BrowserRouter as Router } from "react-router-dom";
import SessionProvider from "../components/SessionProvider";

test("renders create game", () => {
  render(
    <Router>
      <SessionProvider>
        <Menu />
      </SessionProvider>
    </Router>
  );
  const buttonElement = screen.getByText(/crear partida privada/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders title", () => {
  render(
    <Router>
      <SessionProvider>
        <Menu />
      </SessionProvider>
    </Router>
  );
  const titleElement = screen.getByText(/gatovid/i);
  expect(titleElement).toBeInTheDocument();
});
