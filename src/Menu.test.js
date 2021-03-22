import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

test("renders create game", () => {
  render(<Menu />);
  const buttonElement = screen.getByText(/crear partida privada/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders title", () => {
  render(<Menu />);
  const titleElement = screen.getByText(/gatovid/i);
  expect(titleElement).toBeInTheDocument();
});
