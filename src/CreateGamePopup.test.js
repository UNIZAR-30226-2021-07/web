import React from "react";
import { render, screen } from "@testing-library/react";
import PrivatePopUp from "./PrivatePopUp";

test("renders title", () => {
  render(<PrivatePopUp code="1234"/>);
  const titleElement = screen.getByText(/Partida privada lista/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders confirm button", () => {
  render(<PrivatePopUp code="1234"/>);
  const buttonElement = screen.getByText(/CONFIRMAR/i);
  expect(buttonElement).toBeInTheDocument()
});

test("renders copy button", () => {
    render(<PrivatePopUp code="1234"/>);
    const buttonElement = screen.getByText(/Copy/i);
    expect(buttonElement).toBeInTheDocument()
  });

test("check input is correct", () => {
  render(<PrivatePopUp code="1234"/>);
  const inputElement = screen.getByText(/1234/i);
  expect(inputElement).toBeInTheDocument()
});
