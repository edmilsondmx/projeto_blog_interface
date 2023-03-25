import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledList = styled.ul`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 40px;
  padding: 20px 24px;
  background-color: ${(props) => props.theme.colors.bgDark};
`;

const PostList = ({ children }) => <StyledList>{children}</StyledList>;

PostList.defaultProps = {
  children: undefined,
};

PostList.propTypes = {
  children: PropTypes.node,
};

export default PostList;
