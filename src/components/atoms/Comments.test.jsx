import React from "react";
import { render, screen } from "test-utils";
import Comments from "./Comments";

it("renders Comment Component", () => {
  render(
    <Comments
      name="odio adipisci rerum aut animi"
      email="Nikita@garfield.biz"
      body="quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    />
  );

  expect(
    screen.getByText(/odio adipisci rerum aut animi/i)
  ).toBeInTheDocument();
});
