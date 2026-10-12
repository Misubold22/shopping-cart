import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContactUs from "./ContactUs";

describe("ContactUs component", () => {
  it("renders main headings", () => {
    render(<ContactUs />);

    // Check key section headings exist
    expect(
      screen.getByRole("heading", { name: /contact us/i }),
    ).toBeInTheDocument();
  });

  it("renders the banner image with correct alt text", () => {
    render(<ContactUs />);

    // Check image renders properly for screen readers
    const bannerImg = screen.getByRole("img", { name: /contact us banner/i });
    expect(bannerImg).toBeInTheDocument();
  });

  it("renders main content  hedears", () => {
    render(<ContactUs />);

    expect(screen.getByText("Contact OLIA")).toBeInTheDocument();
    expect(screen.getByText("Customer Support")).toBeInTheDocument();
    expect(screen.getByText("Press & Collaborations")).toBeInTheDocument();
    expect(screen.getByText("Careers at OLIA")).toBeInTheDocument();
    expect(screen.getByText("New Suppliers")).toBeInTheDocument();
    expect(screen.getByText("Data & Privacy")).toBeInTheDocument();
  });
});
