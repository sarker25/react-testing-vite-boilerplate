import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

test("should return App", () => {
  render(<App />);

  const textElement = screen.getByText("App");
  expect(textElement).toBeInTheDocument();
});
