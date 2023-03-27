import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "../components/pages/Home";
import { BLOG_URL } from "constants/BLOG_URL";

const Home = () => {
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 10;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BLOG_URL}/posts`);

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HomePage
      postList={posts}
      currentPosts={currentPosts}
      currentPage={currentPage}
      postPerPage={postPerPage}
      paginate={paginate}
    />
  );
};

export default Home;
