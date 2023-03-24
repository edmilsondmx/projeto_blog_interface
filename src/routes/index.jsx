import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../routes/home";
import About from "../routes/about";
import PostDetail from "./postDetail";
import Error404 from "./error";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/comentarios" element={<PostDetail />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRoutes;
