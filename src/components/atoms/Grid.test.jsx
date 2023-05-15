import React from "react";
import { render } from "test-utils";
import Grid from "./Grid";

it("match snapshot", () => {
  render(<Grid />);

  expect(document.head).toMatchSnapshot();
});

it("match snapshot with params", () => {
  render(<Grid sm={2} md={3} lg={4} xl={5}></Grid>);

  expect(document.head).toMatchSnapshot();
});

it("match snapshot with sm an lg", () => {
  render(<Grid sm={6} lg={12}></Grid>);

  expect(document.head).toMatchSnapshot();
});
