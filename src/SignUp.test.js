import { render, screen } from "@testing-library/react";
import React from "react";
import SignUp from "./SignUp";

test("renders title", () => {
  render(<SignUp />);
  const titleElement = screen.getByText(/Iniciar Sesión/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders iniciar sesion button", () => {
  render(<SignUp />);
  const buttonElement = screen.getByText(/Iniciar Sesión/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders crear cuenta button", () => {
  render(<SignUp />);
  const buttonElement = screen.getByText(/Crear una cuenta/i);
  expect(buttonElement).toBeInTheDocument();
});
