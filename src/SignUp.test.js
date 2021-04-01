import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";

test("renders title", () => {
  render(
    <Router>
      <SignUp />
    </Router>
  );
  const titleElement = screen.getByText(/Iniciar Sesión/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders crear cuenta button", () => {
  render(
    <Router>
      <SignUp />
    </Router>
  );
  const buttonElement = screen.getByText(/Crear una cuenta/i);
  expect(buttonElement).toBeInTheDocument();
});
