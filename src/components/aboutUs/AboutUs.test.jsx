import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutUs from "./AboutUs";

describe("AboutUs component", () => {
  it("renders main headings", () => {
    render(<AboutUs />);

    // Check key section headings exist
    expect(
      screen.getByRole("heading", { name: /about us/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /our mission/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /our values/i }),
    ).toBeInTheDocument();
  });

  it("renders the banner image with correct alt text", () => {
    render(<AboutUs />);

    // Check image renders properly for screen readers
    const bannerImg = screen.getByRole("img", { name: /about us banner/i });
    expect(bannerImg).toBeInTheDocument();
  });

  it("renders value items", () => {
    render(<AboutUs />);
    // Check core company values are listed
    expect(screen.getByText("Thoughtfully sourced")).toBeInTheDocument();
    expect(screen.getByText("Good food, simply")).toBeInTheDocument();
    expect(screen.getByText("Less waste")).toBeInTheDocument();
  });
});
