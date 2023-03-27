import React from "react";

import Home from "components/pages/Home";
import { buildPostList } from "models/builders/posts";

export default {
  title: "Components/Pages/Home",
  component: Home,
};

const postsList = buildPostList(20);

export const usage = () => <Home currentPosts={postsList} />;
