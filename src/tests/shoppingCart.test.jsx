import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import ShoppingCart from "../components/shoppingCart/shoppingCart";
import { describe, it, vi, expect, afterEach, beforeEach } from "vitest";
import React from "react";
import "@testing-library/jest-dom/vitest";

// Mock `useOutletContext`
vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useOutletContext: vi.fn(),
}));

describe("ShoppingCart Component", () => {
  const mockSetCartItems = vi.fn();

  const mockCartItems = [
    { id: 1, title: "Item 1", price: 10.0, quantity: 2, image: "item1.jpg" },
    { id: 2, title: "Item 2", price: 20.0, quantity: 1, image: "item2.jpg" },
  ];

  beforeEach(() => {
    useOutletContext.mockReturnValue({
      cartItems: mockCartItems,
      setCartItems: mockSetCartItems,
    });
  });

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  it("renders cart items correctly", () => {
    render(<ShoppingCart />);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Price: £10.00")).toBeInTheDocument();
    expect(screen.getByText("Price: £20.00")).toBeInTheDocument();
  });

  it("displays total items and total price correctly", () => {
    render(<ShoppingCart />);

    expect(screen.getByText("Total number of Items: 3")).toBeInTheDocument();
    expect(screen.getByText("Total: £40.00")).toBeInTheDocument();
  });

  it("updates quantity when input is changed", () => {
    render(<ShoppingCart />);

    const quantityInput = screen.getAllByTestId("quantity-input-cart")[0];
    fireEvent.change(quantityInput, { target: { value: "3" } });
    expect(mockSetCartItems).toHaveBeenCalledWith([
      { id: 1, title: "Item 1", price: 10.0, quantity: 3, image: "item1.jpg" },
      { id: 2, title: "Item 2", price: 20.0, quantity: 1, image: "item2.jpg" },
    ]);
  });

  it("removes an item when the remove button is clicked", () => {
    render(<ShoppingCart />);

    const removeButton = screen.getAllByText("Remove")[0];
    fireEvent.click(removeButton);
    expect(mockSetCartItems).toHaveBeenCalledWith([
      { id: 2, title: "Item 2", price: 20.0, quantity: 1, image: "item2.jpg" },
    ]);
  });

  it("displays 'No items' when the cart is empty", () => {
    useOutletContext.mockReturnValue({
      cartItems: [],
      setCartItems: mockSetCartItems,
    });

    render(<ShoppingCart />);

    expect(screen.getByText("No items")).toBeInTheDocument();
  });

  it("shows an error message when quantity is set to less than 1", () => {
    render(<ShoppingCart />);

    const quantityInput = screen.getAllByTestId("quantity-input-cart")[0];
    fireEvent.change(quantityInput, { target: { value: "0" } });
    const errorSpan = screen.getByText("Quantity needs to be more than 0");
    expect(errorSpan).toBeInTheDocument();
  });
});
