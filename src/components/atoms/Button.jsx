import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.bgDark};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.textOther};
  border: none;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.text};
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
    background: linear-gradient(
      270deg,
      ${(props) => props.theme.colors.main} 0%,
      ${(props) => props.theme.colors.bgDark} 100%
    );
    transform-origin: bottom right;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }
`;

const ButtonWrapper = ({ children }) => <Button>{children}</Button>;

ButtonWrapper.defaultProps = {
  children: undefined,
};

ButtonWrapper.propTypes = {
  children: PropTypes.node,
};

export default ButtonWrapper;
