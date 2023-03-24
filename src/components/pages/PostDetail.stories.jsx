import React from "react";

import PostDetail from "./PostDetail";
import Section from "components/atoms/Section";
import Comments from "components/atoms/Comments";
import Grid from "components/atoms/Grid";
import PostUnit from "components/atoms/PostUnit";
import Heading from "components/atoms/Heading";

export default {
  title: "Components/Pages/PostDetail",
  component: PostDetail,
};

export const usage = () => (
  <Section>
    <PostUnit
      title="sunt aut facere repellat"
      description="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      user="Edmilson Gomes"
    />
    <Heading>
      <h4>Comments:</h4>
    </Heading>
    <Grid lg={2}>
      <Comments
        name="odio adipisci rerum aut animi"
        email="Nikita@garfield.biz"
        body="quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      />
      <Comments
        name="odio adipisci rerum aut animi"
        email="Nikita@garfield.biz"
        body="quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      />
      <Comments
        name="odio adipisci rerum aut animi"
        email="Nikita@garfield.biz"
        body="quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      />
    </Grid>
  </Section>
);
