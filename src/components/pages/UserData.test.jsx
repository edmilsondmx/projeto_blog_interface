import React from "react";
import { render, screen } from "test-utils";
import UserData from "./UserData";
import BgBlog from "assets/BgBlog.jpg";
import AvatarImg from "assets/avatar.jpg";
import { buildUser } from "models/builders/user";

it("renders UserData page", () => {
  render(<UserData user={buildUser[0]} image={BgBlog} avatar={AvatarImg} />);

  expect(
    screen.getByText(/Personal data/i, { selector: "h5" })
  ).toBeInTheDocument();
});
