import React from "react";
import { render, screen } from "test-utils";
import About from "./About";

it("renders About page", () => {
  render(<About />);

  expect(screen.getByText(/Comunidade de aprendizado/i)).toBeInTheDocument();
});
