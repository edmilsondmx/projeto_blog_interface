import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./styles/ThemeProvider";
import { render } from "@testing-library/react";

const TestProvider = ({ children }) => (
  <BrowserRouter basename="/">
    <ThemeProvider>{children}</ThemeProvider>
  </BrowserRouter>
);

export * from "@testing-library/react";

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
