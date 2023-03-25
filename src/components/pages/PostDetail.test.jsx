import React from "react";
import { render, screen } from "test-utils";
import PostDetail from "./PostDetail";

import { buildPost } from "models/builders/posts";

it("renders PostDetail page", () => {
  const post = buildPost();
  render(<PostDetail post={post} />);

  const element = screen.getByText(/Post:/i);
  expect(element).toBeInTheDocument();
});
