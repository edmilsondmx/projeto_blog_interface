import React from "react";

import Comments from "components/atoms/Comments";
import Section from "components/atoms/Section";
import Grid from "components/atoms/Grid";

export default {
  title: "Components/Atoms/Comments",
  component: Comments,
};

export const usage = () => (
  <Section>
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
