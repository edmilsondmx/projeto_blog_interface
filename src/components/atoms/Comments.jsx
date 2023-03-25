import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledComment = styled.div`
  margin-top: 5px;
  margin-bottom: 7px;
  background-color: ${(props) => props.theme.colors.bgCard};
  width: 100%;
  flex-grow: 1;
  border-radius: 6px;
  padding: 10px 32px;
  transition: 0.5s;

  &:hover {
    box-shadow: 1px 1px 7px ${(props) => props.theme.colors.main};
  }

  span {
    color: ${(props) => props.theme.colors.main};
  }

  h5 {
    text-transform: uppercase;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  h6 {
    text-transform: lowercase;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  p {
    margin: 0px;
    font-size: 1rem;
  }

  span {
    display: flex;
    gap: 16px;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.main};
    font-weight: 400;
  }
`;

const StyledUserInfo = styled.div`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textOther};

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

const Comments = ({ name, email, body }) => (
  <StyledComment>
    <StyledUserInfo>
      <span>User</span>
      <h5>{name}</h5>
      <h6>{email}</h6>
    </StyledUserInfo>
    <p>
      <span>Comment</span>
      {body}
    </p>
  </StyledComment>
);
Comments.defaultProps = {
  name: undefined,
  email: undefined,
  body: undefined,
};

Comments.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
};

export default Comments;
