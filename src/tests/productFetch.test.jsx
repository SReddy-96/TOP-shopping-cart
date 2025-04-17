import { renderHook, waitFor } from "@testing-library/react";
import { afterAll, beforeAll, describe, vi, expect, it } from "vitest";
import useProduct from "../productFetch.jsx";

describe("useProduct", () => {
  const fetchSpy = vi.spyOn(window, "fetch");
  beforeAll(() => {
    const mockResolveValue = {
      ok: true,
      json: () =>
        new Promise((resolve) => {
          resolve([
            {
              id: 1,
              title: "Test Product",
              image: "test.jpg",
              rating: { rate: 4.5 },
              price: 100,
            },
          ]);
        }),
    };
    fetchSpy.mockResolvedValue(mockResolveValue);
  });

  afterAll(() => {
    fetchSpy.mockRestore();
  });

  it("should show loading state initially", async () => {
    const { result } = renderHook(() => useProduct());
  
    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));
  });

  it("should fetch products successfully", async () => {
    const { result } = renderHook(() => useProduct());

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.items).toEqual([
      {
        id: 1,
        title: "Test Product",
        image: "test.jpg",
        rating: { rate: 4.5 },
        price: 100,
      },
    ]);
  });

  it("should handle network errors", async () => {
    fetchSpy.mockRejectedValue(new Error("Network error"));

    const { result } = renderHook(() => useProduct());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toEqual(new Error("Network error"));
  });
});
