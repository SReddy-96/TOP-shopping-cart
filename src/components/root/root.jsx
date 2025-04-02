import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav/nav";

function Root() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Nav cartItems={cartItems} />
      <Outlet context={{ setCartItems, cartItems }} />
    </>
  );
}

export default Root;
