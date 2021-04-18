import React from "react";
import { render, screen } from "@testing-library/react";
import StartGamePopup from "../components/popups/StartGamePopup";
import { NumUsersContext } from "../components/UsersProvider";

test("renders title", () => {
  render(
    <NumUsersContext.Provider value={{ users: 5, setUsers: jest.fn() }}>
      <StartGamePopup />
    </ NumUsersContext.Provider >
  );
  const titleElement = screen.getByText(/¿Empezar partida\?/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders start button", () => {
  render(
    <NumUsersContext.Provider value={{ users: 5, setUsers: jest.fn() }}>
      <StartGamePopup />
    </ NumUsersContext.Provider >
  );
  const buttonElement = screen.getByText("Empezar partida");
  expect(buttonElement).toBeInTheDocument();
});

test("check counter", () => {
  render(
    <NumUsersContext.Provider value={{ users: 5, setUsers: jest.fn() }}>
      <StartGamePopup />
    </ NumUsersContext.Provider >
  );
  const counterElement = screen.getByText(/5\/6 gaticos preparados/i);
  expect(counterElement).toBeInTheDocument();
});
