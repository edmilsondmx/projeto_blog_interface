import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../routes/home";
import About from "../routes/about";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
  </Routes>
);

export default AppRoutes;
