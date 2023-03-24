import React from "react";
import { render, screen } from "test-utils";
import PostDetail from "./postDetail";

it("renders Post Detail page", () => {
  render(<PostDetail />);

  expect(screen.getByText("sunt aut facere repellat")).toBeInTheDocument();
});
