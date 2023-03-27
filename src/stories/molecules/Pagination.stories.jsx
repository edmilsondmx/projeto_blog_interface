import React from "react";

import Pagination from "components/molecules/Pagination";

export default {
  title: "Components/Molecules/Pagination",
  component: Pagination,
};

export const usage = () => (
  <Pagination
    postsPerPage={10}
    totalPosts={100}
    currentPage={1}
    scrollToTop={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    paginate={() => console.log("ok")}
  />
);
