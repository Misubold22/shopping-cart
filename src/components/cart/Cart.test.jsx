import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router"; // <-- Import MemoryRouter
import { describe, it, expect, vi } from "vitest";
import Cart from "./Cart";

let mockProducts = [];

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useOutletContext: () => ({
      boughtProducts: mockProducts,
      setBoughtProducts: vi.fn(),
      setProductCount: vi.fn(),
    }),
  };
});

describe("Cart component", () => {
  it("renders empty cart message when no products are in the basket", () => {
    mockProducts = [];

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(/they are no items in your basket/i),
    ).toBeInTheDocument();
  });

  it("renders product details and order summary when items are in the basket", () => {
    mockProducts = [
      {
        id: 1,
        title: "Organic Apples",
        price: 10,
        quantity: 2,
        image: "apple.webp",
      },
    ];

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
    );

    expect(screen.getByText(/your basket/i)).toBeInTheDocument();
    expect(screen.getByText("Organic Apples")).toBeInTheDocument();
    expect(screen.getByText(/order summary/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /checkout/i }),
    ).toBeInTheDocument();
  });
});
