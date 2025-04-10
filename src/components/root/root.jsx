import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav/nav";
import Footer from "../footer/footer.jsx";

function Root() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Nav cartItems={cartItems} />
      <Outlet context={{ setCartItems, cartItems }} />
      <Footer />
    </>
  );
}

export default Root;
