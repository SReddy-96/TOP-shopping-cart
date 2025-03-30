import { useState } from "react";
import { Outlet } from "react-router-dom";

function Root() {
  const { cartItem, setCartItem } = useState(null);
  return <Outlet setCartItem={setCartItem} cartItem={cartItem} />;
}

export default Root;
