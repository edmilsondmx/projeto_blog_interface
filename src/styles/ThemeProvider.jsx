import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const ThemeNames = {
  dark: "dark",
  light: "light",
};

const dark = {
  colors: {
    bgDark: "#111111",
    bgCard: "#151515",
    text: "#fff",
    textOther: "#c8c8c8",
    main: "#00A3FF",
    border: "#1F1F1F",
  },
};

const allThemes = {
  dark,
  light: {
    ...dark,
    colors: {
      ...dark.colors,
      bgDark: "#ffffff",
      bgCard: "#f7f7f7",
      text: "#000000",
      textOther: "#5a5a5a",
      main: "#ff3a5e",
      border: "#0000001f",
    },
  },
};

const ThemeProvider = ({ theme, children }) => (
  <StyledProvider theme={allThemes[theme]}>{children}</StyledProvider>
);

ThemeProvider.defaultProps = {
  theme: "dark",
};

export default ThemeProvider;
