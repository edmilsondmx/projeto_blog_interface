import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faker } from "@faker-js/faker";

import { BreakpointSizes, breakAt } from "styles/Breakpoints";
import Heading from "./Heading";
import Button from "./Button";

const StyledPost = styled.li`
  background-color: ${(props) => props.theme.colors.bgCard};
  width: 100%;
  flex-grow: 1;
  border-radius: 6px;
  padding: 10px 12px;
  border: 2px solid ${(props) => props.theme.colors.border};
  list-style: none;

  ${breakAt(BreakpointSizes.md)} {
    padding: 10px 32px;
  }

  h4 {
    text-transform: capitalize;
    margin-top: 10px;
  }

  p {
    margin: 24px 0px;
    font-size: 1.2rem;
    padding-bottom: 20px;
  }

  i {
    margin-top: 19px;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    flex-direction: column-reverse;
    align-items: flex-end;

    ${breakAt(BreakpointSizes.sm)} {
      gap: 16px;
      flex-direction: row;
      justify-content: flex-end;
    }

    span {
      color: ${(props) => props.theme.colors.main};
    }
    img {
      border-radius: 50%;
    }
  }
`;

const PostUnit = ({ title, description, to, display, toPerfil, username }) => {
  return (
    <StyledPost>
      <Heading>
        <h4>{title}</h4>
      </Heading>
      <p>{description}</p>
      {display ? (
        <Button to={to} variant="btnBody">
          Read more
        </Button>
      ) : (
        <Button to={toPerfil} variant="btnBody">
          View profile
        </Button>
      )}
      <div>
        <i>
          <span>
            {faker.date.past().toLocaleDateString()} -{" "}
            {faker.date.past().toLocaleTimeString()}
          </span>
          <strong>
            Post by: <span>{username}</span>
          </strong>
          <img src={faker.image.avatar()} width={30} height={30} alt="avatar" />
        </i>
      </div>
    </StyledPost>
  );
};

PostUnit.defaultProps = {
  title: undefined,
  description: undefined,
  to: undefined,
  toPerfil: undefined,
  display: true,
};

PostUnit.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toPerfil: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  display: PropTypes.bool,
};

export default PostUnit;
