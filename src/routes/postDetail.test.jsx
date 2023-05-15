import React from "react";
import { render, screen } from "test-utils";
import axios from "axios";
import { useParams as useParamsMock } from "react-router-dom";
import PostDetail from "./postDetail";
import { BLOG_URL } from "../constants/BLOG_URL";

jest.mock("axios"); // Mock axios

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("PostDetail component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders PostDetail page with post and comments", async () => {
    const mockPost = {
      id: 1,
      title: "Test Post",
      body: "This is a test post",
      userId: 1,
    };

    const mockComments = [
      {
        id: 1,
        postId: 1,
        name: "Comment 1",
        email: "comment1@example.com",
        body: "This is comment 1",
      },
      {
        id: 2,
        postId: 1,
        name: "Comment 2",
        email: "comment2@example.com",
        body: "This is comment 2",
      },
    ];

    const mockUsername = "John Doe";

    axios.get.mockImplementation((url) => {
      if (url === `${BLOG_URL}/posts/1`) {
        return Promise.resolve({ data: mockPost });
      } else if (url === `${BLOG_URL}/post/1/comments`) {
        return Promise.resolve({ data: mockComments });
      } else if (url === `${BLOG_URL}/users/1`) {
        return Promise.resolve({ data: { name: mockUsername } });
      }
    });

    useParamsMock.mockReturnValue({ id: 1 });

    render(<PostDetail />);

    const postElement = await screen.findByText("Test Post");
    const comment1Element = await screen.findByText("Comment 1");
    const comment2Element = await screen.findByText("Comment 2");
    const usernameElement = await screen.findByText("John Doe");

    expect(postElement).toBeInTheDocument();
    expect(comment1Element).toBeInTheDocument();
    expect(comment2Element).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();

    expect(axios.get).toHaveBeenCalledTimes(3);
    expect(axios.get).toHaveBeenCalledWith(`${BLOG_URL}/posts/1`);
    expect(axios.get).toHaveBeenCalledWith(`${BLOG_URL}/post/1/comments`);
    expect(axios.get).toHaveBeenCalledWith(`${BLOG_URL}/users/1`);
  });
});
