import React from "react";
import { render, screen } from "@testing-library/react";
import PopUp from "./PopUp";

test('renders title', () => {
  var title = "¡Atención!";
  render(<PopUp title={title} />);
  expect(screen.getByText(title)).toBeInTheDocument();
});

test('renders close button', () => {
  render(<PopUp title="¡Atención!" />);
  expect(screen.getByLabelText("Close")).toBeInTheDocument();
});

test('renders children', () => {
  render(<PopUp title="¡Atención!">
    <p>Test children</p>
  </PopUp>);
  expect(screen.getByText("Test children")).toBeInTheDocument();
});
