import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPost = styled.li`
  background-color: ${(props) => props.theme.colors.bgCard};
  width: 100%;
  flex-grow: 1;
  border-radius: 6px;
  padding: 32px;
  border: 2px solid ${(props) => props.theme.colors.border};
  cursor: pointer;
  list-style: none;

  h3 {
    text-transform: uppercase;
  }

  p {
    margin: 24px 0px;
    font-size: 1.2rem;
  }

  span {
    display: flex;
    gap: 16px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.main};
    font-weight: 400;
  }
`;

const PostUnit = ({ title, description, user }) => (
  <StyledPost>
    <h3>{title}</h3>
    <p>{description}</p>
    <p>
      <span>{user} - 22/03/2023</span>
    </p>
  </StyledPost>
);

PostUnit.defaultProps = {
  title: undefined,
  description: undefined,
  user: undefined,
};

PostUnit.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.string,
};

export default PostUnit;
