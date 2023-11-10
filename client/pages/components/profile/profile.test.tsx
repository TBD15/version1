import React from "react"; // Add this line
import { render, screen, waitFor } from "@testing-library/react";
import Profile from "../profile/profile";

import "@testing-library/jest-dom/extend-expect"; // Add this line

test("Profile page renders correctly", async () => {
  render(<Profile />);

  // Assert that the page title is rendered correctly
  const pageTitle = await screen.findByText("Profile");
});
