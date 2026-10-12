import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Home from "./Home";

describe("Home component", () => {
  it("renders main introductory header and tagline", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    // Check primary hero heading and tagline
    expect(
      screen.getByRole("heading", { name: /organic market/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Good food, simply.")).toBeInTheDocument();
  });

  it("renders key features and belief sections", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    // Check key image section headlines
    expect(screen.getByText("Fresh & simple")).toBeInTheDocument();
    expect(screen.getByText("Thoughtfully sourced")).toBeInTheDocument();

    // Check belief section header
    expect(
      screen.getByRole("heading", { name: /what we believe/i }),
    ).toBeInTheDocument();
  });

  it("renders introductory images with alt text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    // Check images exist via their accessible alt text
    expect(
      screen.getByRole("img", {
        name: /fresh produce in a reusable shopping bag/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /fresh fruits and vegetables/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /agricultural green field/i }),
    ).toBeInTheDocument();
  });
});
