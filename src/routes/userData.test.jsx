import React from "react";
import { render, screen } from "test-utils";
import axios from "axios";
import { useParams as useParamsMock } from "react-router-dom";
import UserData from "./userData";
import { BLOG_URL } from "constants/BLOG_URL";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("UserData component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders UserData page with user data", async () => {
    const mockUserId = "1";
    const mockUser = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    axios.get.mockResolvedValueOnce({ data: mockUser });

    useParamsMock.mockReturnValue({ userId: mockUserId });

    render(<UserData />);

    const nameElement = await screen.findByText("Leanne Graham");
    const usernameElement = await screen.findByText("Bret");

    expect(nameElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${BLOG_URL}/users/1`);
  });
});
