import React from "react";
import { render, screen } from "@testing-library/react";
import DeleteAccountPopup from "./DeleteAccountPopup";

test("renders title", () => {
  render(<DeleteAccountPopup />);
  const titleElement = screen.getByText(
    /¿Desea eliminar su cuenta permanentemente\?/i
  );
  expect(titleElement).toBeInTheDocument();
});

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
