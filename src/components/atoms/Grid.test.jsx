import React from "react";
import { render } from "test-utils";
import Grid from "./Grid";

it("renders without crashing", () => {
  const { asFragment } = render(<Grid />);

  expect(asFragment()).toMatchSnapshot();
});
