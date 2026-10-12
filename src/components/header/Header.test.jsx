// Header.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Header from "./Header";

const renderHeader = (props = {}) => {
  const defaultProps = {
    productCount: 0,
    setProductCount: () => {},
    ...props,
  };

  return render(
    <MemoryRouter>
      <Header {...defaultProps} />
    </MemoryRouter>,
  );
};

describe("Header component", () => {
  it("renders navigation links", () => {
    renderHeader();

    expect(screen.getByText(/olia/i)).toBeInTheDocument();
    expect(screen.getByText(/shop/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  it("displays the correct product count", () => {
    renderHeader({ productCount: 4 });

    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("toggles responsive class when menu icon is clicked", async () => {
    const user = userEvent.setup();
    const { container } = renderHeader();

    const menuButton = container.querySelector("a[class*='icon']");
    const nav = container.querySelector("nav");

    await user.click(menuButton);

    expect(nav.className).toMatch(/responsive/i);
  });
});
