import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../atoms/Section";

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.bgDark};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 2px solid ${(props) => props.theme.colors.main};
  }
`;

const ContainerNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px;

  nav ul {
    display: flex;
    align-items: center;
    gap: 48px;
    list-style: none;
  }

  h2 {
    color: ${(props) => props.theme.colors.text};

    span {
      color: ${(props) => props.theme.colors.main};
    }
  }

  a {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.textOther};
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.colors.text};
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
