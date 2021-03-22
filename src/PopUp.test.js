import { render, screen } from "@testing-library/react";
import React from "react";
import PopUp from "./PopUp";

test("renders title", () => {
  var title = "¡Atención!";
  render(<PopUp title={title} body="Test PopUp" />);
  expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders Aceptar button", () => {
  render(<PopUp title="¡Atención!" />);
  expect(screen.getByText(/continuar/i)).toBeInTheDocument();
});

test("renders Atras button", () => {
  render(<PopUp title="¡Atención!" />);
  expect(screen.getByText(/atras/i)).toBeInTheDocument();
});
