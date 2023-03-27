/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDataPage from "components/pages/UserData";
import BgBlog from "assets/BgBlog.jpg";
import { BLOG_URL } from "constants/BLOG_URL";
import { faker } from "@faker-js/faker";

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
  return (
    <UserDataPage image={BgBlog} avatar={faker.image.avatar()} user={user} />
  );
};

export default UserData;
