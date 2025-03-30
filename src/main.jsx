import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import ShoppingPage from "./routes/shoppingPage";
import ShoppingCart from "./routes/shoppingCart";

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
