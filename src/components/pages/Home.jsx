import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Menu from "../molecules/Menu";
import Section from "../atoms/Section";
import PostList from "../organisms/PostList";
import PostUnit from "../atoms/PostUnit";
import Footer from "../organisms/Footer";
import PostType from "models/types/PostType";

const TitleDiv = styled.div`
  text-align: center;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.main};
  }
`;

const Home = ({ postList }) => (
  <>
    <Menu />
    <Section>
      <TitleDiv>
        <h2>Últimos Posts</h2>
      </TitleDiv>
      <PostList>
        {postList.length === 0 ? (
          <h6>Carregando...</h6>
        ) : (
          postList.map((post) => (
            <PostUnit
              key={post.id}
              title={post.title}
              description={post.body}
              to={`/post/${post.id}/comentarios`}
            />
          ))
        )}
      </PostList>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {
  postList: [],
};

Home.propTypes = {
  postList: PropTypes.arrayOf(PostType),
};

export default Home;
