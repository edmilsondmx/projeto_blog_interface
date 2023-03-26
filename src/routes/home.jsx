import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "../components/pages/Home";
import { BLOG_URL } from "constants/BLOG_URL";

const Home = () => {
  const [posts, setPost] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BLOG_URL}/posts`);

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <HomePage postList={posts} />;
};

export default Home;
