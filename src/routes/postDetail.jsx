/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostDetailPage from "components/pages/PostDetail";
import blogFetchApi from "../axios/config";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetchApi.get(`/posts/${id}`);

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getComments = async () => {
    try {
      const response = await blogFetchApi.get(`/post/${id}/comments`);

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

  return <PostDetailPage post={post} commentsList={comments} />;
};

export default PostDetail;
