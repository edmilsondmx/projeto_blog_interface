import React from "react";
import { render } from "test-utils";
import Grid from "./Grid";

it("match snapshot", () => {
  const { asFragment } = render(<Grid />);

  expect(asFragment()).toMatchSnapshot();
});

it("match snapshot with params", () => {
  const { asFragment } = render(<Grid sm={2} md={3} lg={4} xl={5}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});

it("match snapshot with sm an lg", () => {
  const { asFragment } = render(<Grid sm={6} lg={12}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});
