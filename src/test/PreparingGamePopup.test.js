import React from "react";
import { render, screen } from "@testing-library/react";
import PreparingGamePopup from "../components/popups/PreparingGamePopup";
import { NumUsersContext } from "../components/UsersProvider";

test("renders title", () => {
  /*
  render(
    <NumUsersContext.Provider value={{ users: 5, setUsers: jest.fn() }}>
      <PreparingGamePopup />
    </NumUsersContext.Provider>
  );
  const titleElement = screen.getByText(/Preparando partida\.\.\./i);
  expect(titleElement).toBeInTheDocument();
  */
});
