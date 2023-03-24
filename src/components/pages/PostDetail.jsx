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
import UserType from "models/types/UserType";

const Root = styled.div``;

const PostDetail = ({ post, commentsList, user }) => (
  <Root>
    <Menu
      image="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
      alt="avatar para perfil"
      user={user}
    />
    <Section>
      <PostUnit
        title="sunt aut facere repellat"
        description="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        user="Edmilson Gomes"
      />
      <Grid lg={2}>
        <Comments
          name="odio adipisci rerum aut animi"
          email="Nikita@garfield.biz"
          body="quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        />
      </Grid>
    </Section>
  </Root>
);
PostDetail.defaultProps = {
  post: undefined,
  commentsList: [],
  user: undefined,
};

PostDetail.propTypes = {
  post: PropTypes.arrayOf(PostType),
  commentsList: PropTypes.arrayOf(CommentType),
  user: PropTypes.objectOf(UserType),
};

export default PostDetail;
