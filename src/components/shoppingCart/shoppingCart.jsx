import { useOutletContext } from "react-router-dom";

function ShoppingCart() {
  const { cartItems, setCartItems } = useOutletContext();
  console.log(cartItems)

  const totalPrice = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  return (
    <>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: £{item.price.toFixed(2)}</p>
        </div>
      ))}
      Total: £{totalPrice()}
    </>
  );
}
export default ShoppingCart;
