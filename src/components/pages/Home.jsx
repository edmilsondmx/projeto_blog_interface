import React from "react";
import PropTypes from "prop-types";

import Menu from "../molecules/Menu";
import Section from "../atoms/Section";
import PostList from "../organisms/PostList";
import PostUnit from "../atoms/PostUnit";
import { listPosts } from "../organisms/PostList.stories";
import Footer from "../organisms/Footer";
import PostType from "models/types/PostType";
import UserType from "models/types/UserType";

const Home = ({ postList, user }) => (
  <>
    <Menu
      image="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
      alt="avatar para perfil"
      user={user}
    />
    <Section>
      <PostList>
        {listPosts.map((post) => (
          <PostUnit
            key={post.id}
            title={post.title}
            description={post.body}
            user={post.userId.toString()}
          />
        ))}
      </PostList>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {
  postList: [],
  user: undefined,
};

Home.propTypes = {
  postList: PropTypes.arrayOf(PostType),
  user: PropTypes.objectOf(UserType),
};

export default Home;
