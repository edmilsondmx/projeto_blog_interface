import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoutes;
