import React from "react";
import { render, screen } from "../../test-utils";
import PostList from "./PostList";
import PostUnit from "../atoms/PostUnit";

it("renders PostList with children", () => {
  render(
    <PostList>
      <h1>Título</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </PostList>
  );

  expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument();
});

it("renders PostList with Postunit", () => {
  render(
    <PostList>
      <PostUnit
        title="sunt aut facere repellat"
        description="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        user="Edmilson Gomes"
      />
    </PostList>
  );

  expect(
    screen.getByText(/sunt aut facere repellat/i, { selector: "h4" })
  ).toBeInTheDocument();
});
