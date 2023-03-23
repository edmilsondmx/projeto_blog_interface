/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Section from "../atoms/Section";
import { BreakpointSizes, breakAt } from "../../styles/Breakpoints";
import Button from "../atoms/Button";

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

const Menu = ({ image, alt, user }) => (
  <Header>
    <Section>
      <ContainerNav>
        <Profile>
          <img src={image} alt={alt} />
          <h2>
            Blog <span>|</span> {user}
          </h2>
        </Profile>
        <nav>
          <ul>
            <li>
              <Button as={Link} to="/">
                Home
              </Button>
            </li>
            <li>
              <Button as={Link} to="/sobre">
                Sobre
              </Button>
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
