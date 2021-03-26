import React from "react";
import { render, screen } from "@testing-library/react";
import PrivatePopUp from "./PrivatePopUp";

test("renders title", () => {
  render(<PrivatePopUp/>);
  const titleElement = screen.getByText(/Unirse a partida/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders confirm button", () => {
  render(<PrivatePopUp />);
  const buttonElement = screen.getByText(/CONFIRMAR/i);
  expect(buttonElement).toBeInTheDocument()
});

test("check input is correct", () => {
  render(<PrivatePopUp />);
  const inputElement = screen.getByText(/código/i);
  expect(inputElement).toBeInTheDocument()
});