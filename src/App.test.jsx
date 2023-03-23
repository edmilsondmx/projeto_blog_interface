import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders call to action", () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i, { selector: "button" });
  expect(linkElement).toBeInTheDocument();
});
