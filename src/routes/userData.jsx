/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDataPage from "components/pages/UserData";
import BgBlog from "assets/BgBlog.jpg";
import AvatarImg from "assets/avatar.jpg";
import { BLOG_URL } from "constants/BLOG_URL";

const UserData = () => {
  const [user, setUser] = useState({});

  const { userId } = useParams();

  const getUser = async () => {
    try {
      const response = await axios.get(`${BLOG_URL}/users/${userId}`);

      const data = response.data;

      setUser(data);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);
  return <UserDataPage image={BgBlog} avatar={AvatarImg} user={user} />;
};

export default UserData;
