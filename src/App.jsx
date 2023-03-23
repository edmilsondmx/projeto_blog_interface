import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";
import AppRoutes from "./routes";

function App() {
  const [theme] = useState("dark");

  // const handleClick = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <button>Tema</button>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
