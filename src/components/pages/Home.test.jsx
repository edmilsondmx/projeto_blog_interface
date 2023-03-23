import React from "react";
import { render, screen } from "../../test-utils";
import Home from "./Home";

it("renders Home page", () => {
  render(<Home />);

  const linkElement = screen.getByText(/Blog/i, { selector: "a" });
  expect(linkElement).toBeInTheDocument();
});
