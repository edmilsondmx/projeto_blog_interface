import React from "react";
import { addDecorator } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import GlobalStyle from "../src/styles/GlobalStyle";
import ThemeProvider, { ThemeNames } from "../src/styles/ThemeProvider";

addDecorator((storyFn) => (
  <>
    <ThemeProvider theme={select("Theme", ThemeNames, ThemeNames.dark)}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
