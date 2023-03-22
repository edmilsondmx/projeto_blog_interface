import React from "react";
import { render, screen } from "../../test-utils";
import Menu from "./Menu";

it("renders Menu with user", () => {
  render(<Menu user="Edmilson Gomes" />);

  expect(screen.getByText(/Edmilson Gomes/i)).toBeInTheDocument();
});
