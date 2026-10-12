import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useOutletContext } from "react-router";
import { describe, it, expect, vi } from "vitest";
import Shop from "./Shop";

// Mock root Outlet context coming from App
const mockSetBoughtProducts = vi.fn();
const mockSetProductCount = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useOutletContext: () => ({
      boughtProducts: [],
      setBoughtProducts: mockSetBoughtProducts,
      setProductCount: mockSetProductCount,
    }),
  };
});

// Dummy child component to verify Outlet context propagation
const DummyChild = () => {
  const { handleBuy } = useOutletContext();
  return (
    <button onClick={() => handleBuy({ id: 1, title: "Apple" }, 1, 1)}>
      Buy Product
    </button>
  );
};

describe("Shop component", () => {
  it("renders child outlet route and passes handleBuy via context", async () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/shop" element={<Shop />}>
            <Route index element={<DummyChild />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const buyButton = screen.getByRole("button", { name: /buy product/i });
    expect(buyButton).toBeInTheDocument();
  });
});
