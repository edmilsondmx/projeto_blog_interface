import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";
import Routes from "./routes";

import Switches from "components/atoms/Switches";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switches toggleTheme={toggleTheme} />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
