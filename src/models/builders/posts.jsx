import posts from "./fixtures/posts.json";

export const buildPostList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({ ...posts[i] });
  }

  return result;
};

export const buildPost = () => buildPostList(1)[0];
