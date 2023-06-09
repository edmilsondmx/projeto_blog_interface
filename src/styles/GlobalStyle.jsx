import React from "react";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { BreakpointSizes, breakAt } from "./Breakpoints";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 100%;
    background-color: ${(props) => props.theme.colors.bgDark};
    color: ${(props) => props.theme.colors.text};
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

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: 2px;
  }

  h1 {
    font-size: 2.5rem;

    ${breakAt(BreakpointSizes.lg)} {
      font-size: 3.75rem;
    }
  }

  h2 {
    font-size: 2rem;

    ${breakAt(BreakpointSizes.md)} {
      font-size: 2.2rem;
    }
    ${breakAt(BreakpointSizes.lg)} {
      font-size: 2.7rem;
    }

  }

  h3 {
    font-size: 1.5rem;

    ${breakAt(BreakpointSizes.md)} {
      font-size: 1.9rem;
    }
    ${breakAt(BreakpointSizes.lg)} {
      font-size: 2.5rem;
    }
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 600;

    ${breakAt(BreakpointSizes.lg)} {
      font-size: 2.125rem;
    }
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 300;

    ${breakAt(BreakpointSizes.lg)} {
      font-size: 1.5rem;
    }
  }

  h6 {
    font-size: 1.1rem;
    font-weight: 600;

    ${breakAt(BreakpointSizes.lg)} {
      font-size: 1.25rem;
    }
  }
`;

const GlobalStyleComposed = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);

export default GlobalStyleComposed;
