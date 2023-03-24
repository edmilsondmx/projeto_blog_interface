import React from "react";
import { render, screen } from "test-utils";
import Error404 from "./error";

it("renders with sucess", () => {
  render(<Error404 />);

  expect(screen.getByText(/Página não Encontrada/i)).toBeInTheDocument();
});
