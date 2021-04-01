import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";

/*
test("renders submit button", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  expect(screen.getAllByText(/Iniciar Sesión/i)).toBeInTheDocument();
});*/

test("renders crear cuenta button", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const buttonElement = screen.getByText(/Crear una cuenta/i);
  expect(buttonElement).toBeInTheDocument();
});
