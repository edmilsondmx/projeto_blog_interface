import React from "react";

import PostList from "components/organisms/PostList";
import PostUnit from "components/atoms/PostUnit";

import { buildPostList } from "models/builders/posts";

export default {
  title: "Components/Organisms/PostList",
  component: PostList,
};

export const usage = () => (
  <PostList>
    <PostUnit
      title="sunt aut facere repellat"
      description="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      user="Edmilson Gomes"
    />
  </PostList>
);

const postsList = buildPostList(7);

export const withList = () => (
  <PostList>
    {postsList.map((post) => (
      <PostUnit
        key={post.id}
        title={post.title}
        description={post.body}
        user={post.userId}
      />
    ))}
  </PostList>
);
