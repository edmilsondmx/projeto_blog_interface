import React from "react";

import Pagination from "components/molecules/Pagination";

export default {
  title: "Components/Molecules/Pagination",
  component: Pagination,
};

export const usage = () => <Pagination />;

export const withPag = () => (
  <Pagination postsPerPage={10} totalPosts={100} currentPage={1} />
);
