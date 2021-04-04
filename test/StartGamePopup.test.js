import React from "react";
import { render, screen } from "@testing-library/react";
import StartGamePopup from "./StartGamePopup";

test("renders title", () => {
  render(<StartGamePopup ready="4" total="6" />);
  const titleElement = screen.getByText(/¿Empezar partida\?/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders start button", () => {
  render(<StartGamePopup ready="4" total="6" />);
  const buttonElement = screen.getByText("Empezar partida");
  expect(buttonElement).toBeInTheDocument();
});

test("check counter", () => {
  render(<StartGamePopup ready="4" total="6" />);
  const counterElement = screen.getByText(/4\/6 gaticos preparados/i);
  expect(counterElement).toBeInTheDocument();
});
