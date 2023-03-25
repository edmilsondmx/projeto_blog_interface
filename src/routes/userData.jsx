/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDataPage from "components/pages/UserData";
import blogFetchApi from "../axios/config";
import BgBlog from "assets/BgBlog.jpg";
import AvatarImg from "assets/avatar.jpg";

const UserData = () => {
  const [user, setUser] = useState({});

  const { userId } = useParams();

  const getUser = async () => {
    try {
      const response = await blogFetchApi.get(`/users/${userId}`);
      console.log(userId);

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
