import React from "react";

import Hero from "../../components/molecules/Hero";

import Heading from "components/atoms/Heading";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <Heading>
      <h2># Welcome to DevBlog: Exploring Technology and the Internet</h2>
    </Heading>
  </Hero>
);
