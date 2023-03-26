import React from "react";

import UserData from "components/pages/UserData";
import BgBlog from "assets/BgBlog.jpg";
import AvatarImg from "assets/avatar.jpg";
import { buildUser } from "models/builders/user";

export default {
  title: "Components/Pages/UserData",
  component: UserData,
};

export const usage = () => (
  <UserData user={buildUser[0]} image={BgBlog} avatar={AvatarImg} />
);
