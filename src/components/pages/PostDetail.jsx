import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Menu from "components/molecules/Menu";
import Section from "components/atoms/Section";
import PostUnit from "components/atoms/PostUnit";
import Grid from "components/atoms/Grid";
import Comments from "components/atoms/Comments";
import CommentType from "models/types/CommentType";
import Footer from "components/organisms/Footer";

import Loader from "components/atoms/Loader";

const Root = styled.div`
  .post {
    margin: 15px auto;
  }
`;

const PostDetail = ({ post, commentsList, username }) => {
  return (
    <Root>
      <Menu />
      {Object.keys(post).length === 0 || commentsList.length === 0 ? (
        <Loader />
      ) : (
        <Section>
          <div className="post">
            <p>Post:</p>
            <PostUnit
              title={post.title}
              description={post.body}
              display={false}
              toPerfil={`/user/${post.userId}/perfil`}
              username={username}
            />
          </div>
          <p>Comments:</p>
          <Grid lg={2}>
            {commentsList.map((comment) => (
              <Comments
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            ))}
          </Grid>
        </Section>
      )}
      <Footer />
    </Root>
  );
};
PostDetail.defaultProps = {
  post: {},
  commentsList: [],
};

PostDetail.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  commentsList: PropTypes.arrayOf(CommentType),
};

export default PostDetail;
