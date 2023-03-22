import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const ThemeNames = {
  dark: "dark",
};

const dark = {
  colors: {
    bgDark: "#111111",
    bgCard: "#151515",
    text: "#fff",
    main: "#3af2ff",
    border: "#1F1F1F",
  },
};

const ThemeProvider = ({ theme, children }) => (
  <StyledProvider theme={dark}>{children}</StyledProvider>
);

ThemeProvider.defaultProps = {
  theme: "dark",
};

export default ThemeProvider;
