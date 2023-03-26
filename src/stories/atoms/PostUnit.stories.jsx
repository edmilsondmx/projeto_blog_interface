import React from "react";

import PostUnit from "components/atoms/PostUnit";

export default {
  title: "Components/Atoms/PostUnit",
  component: PostUnit,
};

export const usage = () => (
  <PostUnit
    title="sunt aut facere repellat"
    description="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    display={true}
  />
);
