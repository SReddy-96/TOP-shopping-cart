import { useState, useEffect } from "react";
import ErrorPage from "./error-page";

const useProduct = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (!response.ok) {
          throw {
            message: "Network response was not ok",
            statusText: response.statusText,
            status: response.status,
          };
        }
        return response.json();
      })
      .then((response) => setItems(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, loading, error };
};

export default useProduct;
