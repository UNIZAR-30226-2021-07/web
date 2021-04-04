import React from "react";
import { render, screen } from "@testing-library/react";
import DeleteAccountPopup from "../components/popups/DeleteAccountPopup";

test("renders Si button", () => {
  render(<DeleteAccountPopup />);
  const buttonElement = screen.getByText("Sí");
  expect(buttonElement).toBeInTheDocument();
});

test("renders No button", () => {
  render(<DeleteAccountPopup />);
  const buttonElement = screen.getByText("No");
  expect(buttonElement).toBeInTheDocument();
});
