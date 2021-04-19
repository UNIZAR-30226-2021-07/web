import React from "react";
import { render, screen } from "@testing-library/react";
import JoinPrivateGamePopup from "../components/popups/JoinPrivateGamePopup";

test("renders title", () => {
  /*
  render(
        <JoinPrivateGamePopup socket={null}/>
  );
  const titleElement = screen.getByText(/Unirse a partida/i);
  expect(titleElement).toBeInTheDocument();
*/
});

test("renders confirm button", () => {
  /*
  render(
        <JoinPrivateGamePopup socket={null}/>
  );
  const buttonElement = screen.getByText(/CONFIRMAR/i);
  expect(buttonElement).toBeInTheDocument();
*/
});

test("check input is correct", () => {
  /*
  render(
      <JoinPrivateGamePopup socket={null}/>
  );
  const inputElement = screen.getByPlaceholderText(/código/i);
  expect(inputElement).toBeInTheDocument();
*/
});
