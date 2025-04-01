import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ErrorPage from "./error-page";
import Root from "./components/root/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./components/index";
import ShoppingPage from "./components/shoppingPage/shoppingPage";
import ShoppingCart from "./components/shoppingCart/shoppingCart";
import About from "./components/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          { path: "shop", element: <ShoppingPage /> },
          { path: "cart", element: <ShoppingCart /> },
          { path: "about", element: <About /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
