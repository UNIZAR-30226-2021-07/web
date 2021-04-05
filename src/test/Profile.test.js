import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "../components/Profile";

test("renders profile", () => {
  render(
    <Router>
      <Profile />
    </Router>
  );
});
