import React from "react";

import PostDetail from "./PostDetail";
import { buildComments } from "models/builders/comments";
import { buildPost } from "models/builders/posts";

export default {
  title: "Components/Pages/PostDetail",
  component: PostDetail,
};

export const usage = () => {
  return <PostDetail commentsList={buildComments} post={buildPost()} />;
};
