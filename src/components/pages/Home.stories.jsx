import React from "react";

import Home from "./Home";
import Section from "components/atoms/Section";
import PostList from "components/organisms/PostList";
import PostUnit from "components/atoms/PostUnit";
import { listPosts } from "components/organisms/PostList.stories";

export default {
  title: "Components/Pages/Home",
  component: Home,
};

export const usage = () => (
  <Section>
    <PostList>
      {listPosts.map((post) => (
        <PostUnit
          key={post.id}
          title={post.title}
          description={post.body}
          user={post.userId.toString()}
        />
      ))}
    </PostList>
  </Section>
);
