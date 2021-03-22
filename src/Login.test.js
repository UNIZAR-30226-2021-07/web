import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

test("renders submit button", () => {
  render(<Login />);
  expect(screen.getByText("Iniciar Sesión")).toBeInTheDocument();
});
