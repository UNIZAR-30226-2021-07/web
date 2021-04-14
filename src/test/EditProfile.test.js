import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EditProfile from "../components/EditProfile";

import SessionProvider from "../components/SessionProvider";

test("renders EditProfile", () => {
  render(
    <Router>
      <SessionProvider>
        <EditProfile />
      </SessionProvider>
    </Router>
  );

  var buttonElement = screen.getByText(/GUARDAR/i);
  expect(buttonElement).toBeInTheDocument();

  buttonElement = screen.getByText(/Eliminar cuenta/i);
  expect(buttonElement).toBeInTheDocument();
});
