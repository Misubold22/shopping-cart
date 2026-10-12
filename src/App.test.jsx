import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders Header and main layout without crashing", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(
      expect(screen.getByRole("link", { name: /olia/i })).toBeInTheDocument(),
    );
  });
});
