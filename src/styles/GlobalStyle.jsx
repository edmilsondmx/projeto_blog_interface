import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 100%;
    color: #212121;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0!important;
  }

  a, button{
    font-family: "Poppins", sans-serif;
  }

  h1, h2, h3, h5, h6 {
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 2px;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.9rem;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 300;
  }

  h6 {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const GlobalStyleComposed = () => (
  <>
    <GlobalStyle />
  </>
);

export default GlobalStyleComposed;
