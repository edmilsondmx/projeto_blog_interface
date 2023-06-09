/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostDetailPage from "components/pages/PostDetail";
import { BLOG_URL } from "constants/BLOG_URL";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [username, setUsername] = useState("");

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await axios.get(`${BLOG_URL}/posts/${id}`);

      const data = response.data;

      setPost(data);
      const userId = data.userId;
      getUsername(userId);
    } catch (error) {
      console.error(error);
    }
  };
  const getComments = async () => {
    try {
      const response = await axios.get(`${BLOG_URL}/post/${id}/comments`);

      const data = response.data;

      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  const getUsername = async (userId) => {
    try {
      const response = await axios.get(`${BLOG_URL}/users/${userId}`);

      const data = response.data.name;

      setUsername(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <PostDetailPage post={post} commentsList={comments} username={username} />
  );
};

export default PostDetail;
