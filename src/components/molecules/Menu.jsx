import React from "react";
import styled from "styled-components";

import Button from "components/atoms/Button";
import Section from "components/atoms/Section";
import { BreakpointSizes, breakAt } from "styles/Breakpoints";

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.bgDark};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  img {
    display: none;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    border: 2px solid ${(props) => props.theme.colors.main};

    ${breakAt(BreakpointSizes.md)} {
      display: inline;
    }
  }
`;

const ContainerNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5px;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    background-color: ${(props) => props.theme.colors.main};
    height: 5px;
    width: 70px;
  }

  ${breakAt(BreakpointSizes.sm)} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
  }

  ${breakAt(BreakpointSizes.md)} {
    justify-content: center;
  }

  ${breakAt(BreakpointSizes.lg)} {
    justify-content: space-between;
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 48px;
    list-style: none;
  }

  h2 {
    color: ${(props) => props.theme.colors.text};
    margin: 5px auto;

    span {
      color: ${(props) => props.theme.colors.main};
    }
  }
`;

const Menu = () => (
  <Header>
    <Section>
      <ContainerNav>
        <Profile>
          <h2>
            Blog <span>|</span> DevBlog
          </h2>
        </Profile>
        <nav>
          <ul>
            <li>
              <Button to="/" variant="menu">
                Home
              </Button>
            </li>
            <li>
              <Button to="/sobre" variant="menu">
                About
              </Button>
            </li>
          </ul>
        </nav>
      </ContainerNav>
    </Section>
  </Header>
);

export default Menu;
