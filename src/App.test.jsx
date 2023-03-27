import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders call to action", () => {
  render(<App />);

  const Element = screen.getByText(/Blog/i);
  expect(Element).toBeInTheDocument();
});
