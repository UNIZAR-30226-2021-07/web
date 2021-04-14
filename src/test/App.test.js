import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../components/App";
import SessionProvider from "../components/SessionProvider";

test("renders without crashing", () => {
  render(
    <Router>
      <SessionProvider>
        <App />
      </SessionProvider>
    </Router>
  );
});
