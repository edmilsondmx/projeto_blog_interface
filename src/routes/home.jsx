import React from "react";
import { useEffect, useState } from "react";
import HomePage from "../components/pages/Home";
import blogFetchApi from "../axios/config";

const Home = () => {
  const [post, setPost] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetchApi.get("/posts");

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <HomePage postList={post} />;
};

export default Home;
