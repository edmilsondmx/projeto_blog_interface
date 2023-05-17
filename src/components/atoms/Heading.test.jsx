import React from "react";
import { render } from "../../test-utils";
import Heading from "./Heading";

it("match snapshot", () => {
  const { asFragment } = render(<Heading>Title</Heading>);

  expect(asFragment()).toMatchSnapshot();
});
