import React from "react";
import { render, screen } from "@testing-library/react";
import PreparingGamePopup from "./PreparingGamePopup";

test("renders title", () => {
  render(<PreparingGamePopup />);
  const titleElement = screen.getByText(/Preparando partida\.\.\./i);
  expect(titleElement).toBeInTheDocument();
});