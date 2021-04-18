import React from "react";
import { render, screen } from "@testing-library/react";
import JoinPrivateGamePopup from "../components/popups/JoinPrivateGamePopup";
import { NumUsersContext } from "../components/UsersProvider";

test("renders title", () => {
  render(
    <NumUsersContext.Provider value={{ users: 5, setUsers: jest.fn() }}>
      <JoinPrivateGamePopup />
    </NumUsersContext.Provider>
  );
  const titleElement = screen.getByText(/Unirse a partida/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders confirm button", () => {
  render(
    <NumUsersContext.Provider value={{ users: 5, setUsers: jest.fn() }}>
      <JoinPrivateGamePopup />
    </NumUsersContext.Provider>
  );
  const buttonElement = screen.getByText(/CONFIRMAR/i);
  expect(buttonElement).toBeInTheDocument();
});

test("check input is correct", () => {
  render(
    <NumUsersContext.Provider value={{ users: 5, setUsers: jest.fn() }}>
      <JoinPrivateGamePopup />
    </NumUsersContext.Provider>
  );
  const inputElement = screen.getByPlaceholderText(/código/i);
  expect(inputElement).toBeInTheDocument();
});
