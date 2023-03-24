import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";
import Routes from "./routes";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const IconContainer = styled.p`
  font-size: 2rem;
  padding: 2px;
  position: fixed;
  right: 5px;
  top: 40px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.main};
`;

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <IconContainer onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </IconContainer>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
