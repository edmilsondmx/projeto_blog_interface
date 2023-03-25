import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Menu from "components/molecules/Menu";
import Section from "components/atoms/Section";
import PostUnit from "components/atoms/PostUnit";
import Grid from "components/atoms/Grid";
import Comments from "components/atoms/Comments";
import PostType from "models/types/PostType";
import CommentType from "models/types/CommentType";
import Footer from "components/organisms/Footer";

const Root = styled.div`
  .post {
    margin: 15px auto;
  }
`;

const PostDetail = ({ post, commentsList }) => (
  <Root>
    <Menu />
    <Section>
      <div className="post">
        <p>Post:</p>
        <PostUnit
          title={post.title}
          description={post.body}
          display={false}
          toPerfil={`/user/${post.userId}/perfil`}
        />
      </div>
      <p>Comentários:</p>
      <Grid lg={2}>
        {commentsList.length === 0 ? (
          <h6>Carregando...</h6>
        ) : (
          commentsList.map((comment) => (
            <Comments
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))
        )}
      </Grid>
    </Section>
    <Footer />
  </Root>
);
PostDetail.defaultProps = {
  post: undefined,
  commentsList: [],
};

PostDetail.propTypes = {
  post: PropTypes.objectOf(PostType),
  commentsList: PropTypes.arrayOf(CommentType),
};

export default PostDetail;
