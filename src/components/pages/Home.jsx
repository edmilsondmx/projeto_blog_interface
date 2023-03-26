import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

import Menu from "../molecules/Menu";
import Section from "../atoms/Section";
import PostList from "../organisms/PostList";
import PostUnit from "../atoms/PostUnit";
import Footer from "../organisms/Footer";
import PostType from "models/types/PostType";
import Pagination from "components/molecules/Pagination";

const TitleDiv = styled.div`
  text-align: center;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.main};
  }
`;

const Loading = styled.h3`
  color: ${(props) => props.theme.colors.main};
`;

const Home = ({ postList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 10;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = postList?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Menu />
      <Section>
        <TitleDiv>
          <h2>Últimos Posts</h2>
        </TitleDiv>
        <PostList>
          {currentPosts.length === 0 ? (
            <Loading>Carregando...</Loading>
          ) : (
            currentPosts.map((post) => (
              <PostUnit
                key={post.id}
                title={post.title}
                description={post.body}
                to={`/post/${post.id}/comentarios`}
              />
            ))
          )}
        </PostList>
        <Pagination
          postsPerPage={postPerPage}
          totalPosts={postList?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Section>
      <Footer />
    </>
  );
};

Home.defaultProps = {
  postList: [],
};

Home.propTypes = {
  postList: PropTypes.arrayOf(PostType),
};

export default Home;
