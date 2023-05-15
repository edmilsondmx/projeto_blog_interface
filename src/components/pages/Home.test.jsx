import React from "react";
import { render, screen } from "../../test-utils";
import Home from "./Home";
import { buildPostList } from "models/builders/posts";

it("renders Home page", () => {
  window.scrollTo = jest.fn();

  render(<Home currentPosts={buildPostList()} />);

  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
