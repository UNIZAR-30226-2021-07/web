import React from "react";
import { render, screen } from "@testing-library/react";
import CreateGamePopup from "./CreateGamePopup";

test("renders title", () => {
  render(<CreateGamePopup code="1234" />);
  const titleElement = screen.getByText(/Partida privada lista/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders confirm button", () => {
  render(<CreateGamePopup code="1234" />);
  const buttonElement = screen.getByText(/CONFIRMAR/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders copy button", () => {
  render(<CreateGamePopup code="1234" />);
  const buttonElement = screen.getByText(/Copy/i);
  expect(buttonElement).toBeInTheDocument();
});

test("check code exists", () => {
  const code = "1312";
  render(<CreateGamePopup code={code} />);
  const codeBox = screen.getByDisplayValue(code);
  expect(codeBox).toBeInTheDocument();
});
