import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, it, expect, vi } from "vitest";
import ProductDetail from "./ProductDetail";

// Sample mock data for testing
const mockProduct = {
  id: 1,
  title: "Organic Olive Oil",
  description: "Cold-pressed extra virgin olive oil.",
  price: 15.99,
  availabilityStatus: "In Stock",
  rating: 4.5,
  reviews: [{ id: 1 }, { id: 2 }],
  images: ["oil.jpg"],
};

const mockHandleBuy = vi.fn();

// Mock React Router hooks used inside the component
vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useParams: () => ({ productId: "1" }),
    useLoaderData: () => ({ products: [mockProduct] }),
    useOutletContext: () => ({ handleBuy: mockHandleBuy }),
  };
});

describe("CardDetail component", () => {
  it("renders product information correctly", () => {
    render(
      <MemoryRouter>
        <ProductDetail />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Organic Olive Oil" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Cold-pressed extra virgin olive oil."),
    ).toBeInTheDocument();

    expect(screen.getByText("$15.99")).toBeInTheDocument();
    expect(screen.getByText("In Stock")).toBeInTheDocument();
    expect(screen.getByText("2 reviews")).toBeInTheDocument();
  });

  it("calls handleBuy with correct quantity when Add to Cart is clicked", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ProductDetail />
      </MemoryRouter>,
    );

    const addToCartBtn = screen.getByRole("button", { name: /add to cart/i });
    await user.click(addToCartBtn);

    expect(mockHandleBuy).toHaveBeenCalledTimes(1);
    expect(mockHandleBuy).toHaveBeenCalledWith(mockProduct, 1, 1);
  });
});
