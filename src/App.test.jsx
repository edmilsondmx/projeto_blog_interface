import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders call to action", () => {
  window.scrollTo = jest.fn();
  render(<App />);

  const Element = screen.getByText(/Home/i, { selector: "a" });
  expect(Element).toBeInTheDocument();
});
