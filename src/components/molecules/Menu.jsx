import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../atoms/Section";
import { BreakpointSizes, breakAt } from "../../styles/Breakpoints";
import Heading from "../atoms/Heading";

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.bgDark};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  img {
    display: none;
    width: 60px;
    height: 60px;
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
  flex-wrap: wrap;
  padding: 5px;

  ${breakAt(BreakpointSizes.sm)} {
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

  a {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.textOther};
    text-decoration: none;
    position: relative;

    &:hover {
      color: ${(props) => props.theme.colors.text};
    }
  }
  li a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  li a::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -7px;
    left: 0;
    background: linear-gradient(
      270deg,
      ${(props) => props.theme.colors.main} 0%,
      ${(props) => props.theme.colors.bgDark} 100%
    );
    transform-origin: bottom right;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }
`;

const Menu = ({ image, alt, user }) => (
  <Header>
    <Section>
      <ContainerNav>
        <Profile>
          <img src={image} alt={alt} />
          <Heading>
            <h2>
              Blog <span>|</span> {user}
            </h2>
          </Heading>
        </Profile>
        <nav>
          <ul>
            <li>
              <a href="https://github.com">Blog</a>
            </li>
            <li>
              <a href="https://github.com">Sobre</a>
            </li>
          </ul>
        </nav>
      </ContainerNav>
    </Section>
  </Header>
);
Menu.defaultProps = {
  image: undefined,
  alt: undefined,
  user: undefined,
};

Menu.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  user: PropTypes.node,
};

export default Menu;
