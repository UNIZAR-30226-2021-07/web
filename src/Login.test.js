import { render, screen } from "@testing-library/react";
import React from "react";
import Login from "./Login";

test("renders submit button", () => {
  render(<Login />);
  expect(screen.getByText("Iniciar Sesión")).toBeInTheDocument();
});
