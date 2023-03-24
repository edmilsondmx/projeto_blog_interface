import React from "react";
import styled from "styled-components";

import Section from "../atoms/Section";
import { BreakpointSizes, breakAt } from "../../styles/Breakpoints";

const Root = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bgCard};
  color: ${(props) => props.theme.colors.textOther};
  padding: 10px 0;
  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${breakAt(BreakpointSizes.md)} {
      margin: 8px 0;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.main};
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

const Footer = () => (
  <Root>
    <Section>
      <div>
        <FooterLink href="https://www.google.com">Instagram</FooterLink>
        <p>Copyright © 2023</p>
        <FooterLink href="https://www.google.com">Twiter</FooterLink>
      </div>
    </Section>
  </Root>
);

export default Footer;
