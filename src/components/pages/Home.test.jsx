import React from "react";
import { render, screen } from "../../test-utils";
import Home from "./Home";

it("renders Home page", () => {
  render(<Home />);

  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
