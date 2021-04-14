import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "../components/Profile";
import SessionProvider from "../components/SessionProvider";

test("renders profile", () => {
  render(
    <Router>
      <SessionProvider>
        <Profile />
      </SessionProvider>
    </Router>
  );
});
