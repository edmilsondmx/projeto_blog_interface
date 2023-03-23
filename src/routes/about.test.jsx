import React from "react";
import { render, screen } from "test-utils";
import About from "./about";

it("renders About page", () => {
  render(<About></About>);

  expect(screen.getByText(/Comunidade de aprendizado/i)).toBeInTheDocument();
});
