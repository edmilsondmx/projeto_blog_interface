import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonsVariants = {
  default: "menu",
  btnBody: "btnBody",
};

const ButtonBody = styled(Link)`
  --main: ${(props) => props.theme.colors.main};
  --text: ${(props) => props.theme.colors.text};
  --bgButton: ${(props) => props.theme.colors.bgButton};
  --bgButton2: ${(props) => props.theme.colors.bgButton2};
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--main);
  text-decoration: none;
  color: var(--main);

  &:hover {
    color: var(--text);
    box-shadow: inset 0 0 10px var(--bgButton2), 0 0 9px 3px var(--bgButton);
  }

  &:before {
    content: "";
    border-radius: 0.6rem;
    position: absolute;
    left: -0.2em;
    width: 1em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      var(--bgButton) 40%,
      var(--bgButton) 60%,
      transparent 100%
    );
  }

  &:hover:before {
    transform: translateX(11.2em);
  }
`;

const ButtonMenu = styled(Link)`
  --main: ${(props) => props.theme.colors.main};
  --text: ${(props) => props.theme.colors.text};
  --bgButton: ${(props) => props.theme.colors.bgButton};
  --bgButton2: ${(props) => props.theme.colors.bgButton2};
  --textOther: ${(props) => props.theme.colors.textOther};
  --bgDark: ${(props) => props.theme.colors.bgDark};
  background-color: transparent;
  font-size: 2rem;
  color: var(--textOther);
  border: none;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &:hover {
    background: linear-gradient(45deg, var(--text), var(--main));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -7px;
    left: 0;
    background: linear-gradient(270deg, var(--main) 0%, var(--bgDark) 100%);
    transform-origin: bottom right;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }
`;

const ButtonWrapper = ({ children, to, variant }) => {
  switch (variant) {
    case ButtonsVariants.btnBody:
      return <ButtonBody to={to}>{children}</ButtonBody>;
    default:
      return <ButtonMenu to={to}>{children}</ButtonMenu>;
  }
};

ButtonWrapper.defaultProps = {
  children: undefined,
  to: undefined,
  variant: "default",
};

ButtonWrapper.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.values(ButtonsVariants)),
};

export default ButtonWrapper;
