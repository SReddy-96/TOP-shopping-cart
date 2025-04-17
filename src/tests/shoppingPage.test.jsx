import React from "react";
import { render, waitFor, screen, cleanup } from "@testing-library/react";
import { beforeEach, describe, vi, expect, it, afterEach } from "vitest";
import ShoppingPage from "../components/shoppingPage/shoppingPage.jsx";
import { useOutletContext } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

// Mock `useOutletContext`
vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useOutletContext: vi.fn(),
}));

describe("ShoppingPage", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
    cleanup(); // Clears the DOM after each test
  });

  it("should render product on the page", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: "OK",
      json: async () => [
        {
          id: 1,
          title: "Test Product",
          image: "test.jpg",
          rating: { rate: 4.5 },
          price: 100.0,
        },
      ],
      loading: false,
      error: null,
    });

    useOutletContext.mockReturnValue({
      cartItems: [],
      setCartItems: vi.fn(),
    });

    render(<ShoppingPage />);

    await waitFor(() => {
      expect(screen.getByText(/Test Product/i)).toBeInTheDocument();

      expect(screen.getByText(/£100.00/i)).toBeInTheDocument();
    });
  });

  it("should show loading message when loading", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: "OK",
      json: async () => [],
      loading: true,
      error: null,
    });

    useOutletContext.mockReturnValue({
      cartItems: [],
      setCartItems: vi.fn(),
    });

    render(<ShoppingPage />);

    await waitFor(() => {
      expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });
  });

  it("Should increase items to 1", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: "OK",
      json: async () => [
        {
          id: 1,
          title: "Test Product",
          image: "test.jpg",
          rating: { rate: 4.5 },
          price: 100.0,
        },
      ],
      loading: false,
      error: null,
    });

    useOutletContext.mockReturnValue({
      cartItems: [],
      setCartItems: vi.fn(),
    });

    render(<ShoppingPage />);

    await waitFor(() => {
      const button = screen.getByRole("button", { name: /Add to cart/i });

      button.click();
      
      expect(screen.getByTestId("quantity-input")).toHaveValue(1);
    });
  });
});
