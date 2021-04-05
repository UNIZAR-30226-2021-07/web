import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorPopup from "../components/popups/ErrorPopup";

test("renders title", () => {
  const title = "Atencion";
  render(<ErrorPopup title={title} />);
  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});

test("renders body", () => {
  const title = "¡Ojo!";
  const body = "Ha habido un error";
  render(<ErrorPopup title={title} body={body} />);
  const inputElement = screen.getByText(body);
  expect(inputElement).toBeInTheDocument();
});

test("renders aceptar button", () => {
  render(<ErrorPopup />);
  const buttonElement = screen.getByText(/ACEPTAR/i);
  expect(buttonElement).toBeInTheDocument();
});
