import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "../components/SignUp";

test("renders title", () => {
  render(
    <Router>
      <SignUp />
    </Router>
  );
  const titleElement = screen.getByText(/Crear una cuenta/i);
  expect(titleElement).toBeInTheDocument();
});
/*
test("renders iniciar sesion button", () => {
  render(
    <Router>
      <SignUp />
    </Router>
  );
  const buttonElement = screen.getByText(/Iniciar sesion/i);
  expect(buttonElement).toBeInTheDocument();
});*/

test("renders registrarse button", () => {
  render(
    <Router>
      <SignUp />
    </Router>
  );
  const buttonElement = screen.getByText(/Registrarse/i);
  expect(buttonElement).toBeInTheDocument();
});
