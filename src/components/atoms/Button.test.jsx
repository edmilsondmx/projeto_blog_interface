import React from "react";
import { render, screen } from "test-utils";
import Button from "./Button";

it("renders a text", () => {
  render(<Button>Click Here</Button>);

  expect(screen.getByText("Click Here")).toBeInTheDocument();
});
