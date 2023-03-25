import React from "react";

import Home from "./Home";
import { buildPostList } from "models/builders/posts";

export default {
  title: "Components/Pages/Home",
  component: Home,
};

const postsList = buildPostList(10);

export const usage = () => <Home postList={postsList} />;
