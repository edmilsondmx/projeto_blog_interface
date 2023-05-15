import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import styled from "styled-components";
import { BreakpointSizes, breakAt } from "styles/Breakpoints";

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  grid-column-start: span 2;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    list-style: none;
  }

  li {
    transition: all 0.5s ease;
    border-radius: 100%;
    user-select: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 0 0.3rem;
    ${breakAt(BreakpointSizes.sm)} {
      padding: 1rem 1.6rem;
      margin: 0 0.5rem;
    }
  }

  .active {
    background-color: ${(props) => props.theme.colors.bgCard};
    color: ${(props) => props.theme.colors.main};
  }
  .disable {
    display: none;
  }

  li:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: #fff;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font-size: 0.9rem;

    ${breakAt(BreakpointSizes.sm)} {
      font-size: 1.2rem;
    }
  }
`;

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  scrollToTop,
}) => {
  const pageNum = [];
  const [firstPage, setFirstPage] = useState(currentPage - 1);
  const [lastPage, setLastPage] = useState(currentPage + 4);

  useEffect(() => {
    scrollToTop();
  }, [currentPage, scrollToTop]);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (totalPosts === undefined) {
    return (
      <Content>
        <h6>CARREGANDO...</h6>;
      </Content>
    );
  }

  for (let i = 1; i <= totalPages; i++) {
    pageNum.push(i);
  }
  const handleUpdatePages = (current) => {
    switch (current) {
      case 1:
        setFirstPage(current - 1);
        setLastPage(current + 4);
        break;
      case 2:
        setFirstPage(current - 2);
        setLastPage(current + 3);
        break;
      case pageNum.length:
        setFirstPage(pageNum.length - 5);
        setLastPage(pageNum.length);
        break;
      case pageNum.length - 1:
        setFirstPage(pageNum.length - 5);
        setLastPage(pageNum.length);
        break;
      default:
        setFirstPage(current - 3);
        setLastPage(current + 2);
        break;
    }
  };

  return (
    <Container>
      <ul>
        <li
          className={`${currentPage === 1 ? "disable" : ""}`}
          onClick={() => {
            paginate(1);
            handleUpdatePages(1);
          }}
        >
          &lt;&lt;
        </li>
        {pageNum.slice(firstPage, lastPage).map((number) => (
          <li
            key={number}
            onClick={() => {
              paginate(number);
              handleUpdatePages(number);
            }}
            className={`${currentPage === number ? "active" : ""}`}
          >
            <button className={`${currentPage === number ? "active" : ""}`}>
              {number}
            </button>
          </li>
        ))}
        <li
          className={`${currentPage === totalPages ? "disable" : ""}`}
          onClick={() => {
            paginate(lastPage);
            handleUpdatePages(lastPage);
          }}
        >
          &gt;&gt;
        </li>
      </ul>
    </Container>
  );
};

Pagination.defaultProps = {
  postsPerPage: undefined,
  totalPosts: undefined,
  paginate: undefined,
  currentPage: undefined,
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Pagination;
