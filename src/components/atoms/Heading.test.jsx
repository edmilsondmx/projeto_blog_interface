import React from "react";
import { render } from "../../test-utils";
import Heading from "./Heading";

it("match snapshot", () => {
  render(<Heading>Title</Heading>);
});
