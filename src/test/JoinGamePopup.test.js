import React from "react";
import { render, screen } from "@testing-library/react";
import JoinGamePopup from "../components/popups/JoinGamePopup";

test("renders title", () => {
  render(<JoinGamePopup />);
  const titleElement = screen.getByText(/Unirse a partida/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders confirm button", () => {
  render(<JoinGamePopup />);
  const buttonElement = screen.getByText(/CONFIRMAR/i);
  expect(buttonElement).toBeInTheDocument();
});

test("check input is correct", () => {
  render(<JoinGamePopup />);
  const inputElement = screen.getByPlaceholderText(/código/i);
  expect(inputElement).toBeInTheDocument();
});
