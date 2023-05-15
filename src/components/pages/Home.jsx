import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Menu from "../molecules/Menu";
import Section from "../atoms/Section";
import PostList from "../organisms/PostList";
import PostUnit from "../atoms/PostUnit";
import Footer from "../organisms/Footer";
import PostType from "models/types/PostType";
import Pagination from "components/molecules/Pagination";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";

import Loader from "components/atoms/Loader";

const TitleDiv = styled.div`
  text-align: center;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.main};
  }
`;

const Home = ({
  postList,
  currentPosts,
  postPerPage,
  paginate,
  currentPage,
  getUsername,
  username,
}) => {
  return (
    <>
      <Menu />
      <Hero image="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <Heading>
          <h2># Welcome to DevBlog: Exploring Technology and the Internet</h2>
        </Heading>
      </Hero>
      <Section>
        <TitleDiv>
          {currentPage === 1 ? (
            <h2>LAST POSTS</h2>
          ) : (
            <h2>Page {currentPage} of posts</h2>
          )}
        </TitleDiv>
        <PostList>
          {currentPosts.length === 0 ? (
            <Loader />
          ) : (
            currentPosts.map((post) => (
              <PostUnit
                key={post.id}
                title={post.title}
                description={post.body}
                to={`/post/${post.id}/comentarios`}
                username={username}
                getUsername={getUsername(post.userId)}
              />
            ))
          )}
        </PostList>
        <Pagination
          postsPerPage={postPerPage}
          totalPosts={postList?.length}
          paginate={paginate}
          currentPage={currentPage}
          scrollToTop={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        />
      </Section>
      <Footer />
    </>
  );
};

Home.defaultProps = {
  postList: [],
  currentPosts: [],
};

Home.propTypes = {
  postList: PropTypes.arrayOf(PostType),
  currentPosts: PropTypes.arrayOf(PostType),
};

export default Home;
