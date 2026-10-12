import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "./ProductCard";

// Mock product prop data
const mockProduct = {
  id: 101,
  title: "Organic Honey",
  price: 12.99,
  images: ["honey.jpg"],
};

describe("ProductCard component", () => {
  it("renders product title and price", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} handleBuy={vi.fn()} />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Organic Honey" }),
    ).toBeInTheDocument();

    expect(screen.getByText("$12.99")).toBeInTheDocument();
  });

  it("calls handleBuy with correct parameters when add-to-cart button is clicked", async () => {
    const user = userEvent.setup();
    const mockHandleBuy = vi.fn();

    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} handleBuy={mockHandleBuy} />
      </MemoryRouter>,
    );

    // Get button
    const addButton = screen.getByRole("button", {
      name: /add product to cart/i,
    });

    await user.click(addButton);

    // Verify handleBuy was called with (product, defaultQuantity, id)
    expect(mockHandleBuy).toHaveBeenCalledTimes(1);
    expect(mockHandleBuy).toHaveBeenCalledWith(mockProduct, 1, 101);
  });
});
