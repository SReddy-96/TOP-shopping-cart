import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav/nav";

function Root() {
  const { cartItem, setCartItem } = useState(null);
  return (
    <>
      <Nav />
      <Outlet context={{ setCartItem, cartItem }} />
    </>
  );
}

export default Root;
