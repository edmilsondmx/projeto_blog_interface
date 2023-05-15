import React from "react";
import { render, screen } from "test-utils";
import About from "./About";

it("renders About page", () => {
  render(<About />);

  expect(screen.getByText(/Know our history/i)).toBeInTheDocument();
});
