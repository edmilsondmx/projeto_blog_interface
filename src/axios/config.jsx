import axios from "axios/index";

const blogFetchApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetchApi;
