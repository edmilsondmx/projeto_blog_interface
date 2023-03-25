import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Heading from "./Heading";
import Button from "./Button";

const StyledPost = styled.li`
  background-color: ${(props) => props.theme.colors.bgCard};
  width: 100%;
  flex-grow: 1;
  border-radius: 6px;
  padding: 10px 32px;
  border: 2px solid ${(props) => props.theme.colors.border};
  list-style: none;

  h4 {
    text-transform: capitalize;
    margin-top: 10px;
  }

  p {
    margin: 24px 0px;
    font-size: 1.2rem;
  }

  span {
    display: flex;
    gap: 16px;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.main};
    font-weight: 400;
  }
`;

const PostUnit = ({ title, description, to, display, toPerfil }) => (
  <StyledPost>
    <Heading>
      <h4>{title}</h4>
    </Heading>
    <p>{description}</p>
    {display ? (
      <Button to={to}>Ler mais</Button>
    ) : (
      <Button to={toPerfil}>Ver Perfil</Button>
    )}
  </StyledPost>
);

PostUnit.defaultProps = {
  title: undefined,
  description: undefined,
  to: undefined,
  display: true,
};

PostUnit.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  to: PropTypes.string,
  display: PropTypes.bool,
};

export default PostUnit;
