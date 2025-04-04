import { useOutletContext } from "react-router-dom";
import styles from "./shoppingCart.module.css";
import Button from "../../styles/Buttons.module.css";

function ShoppingCart() {
  const { cartItems, setCartItems } = useOutletContext();

  const totalPrice = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  // write function handle change of the quantity of each item

  // function to handle the removing of an item
  const handleRemove = (event, product) => {
    event.preventDefault();
    const check = cartItems.find((item) => item.id === product.id);
    if (check) {
      const updatedCart = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updatedCart);
    } else {
      throw Error;
    }
  };

  return (
    <div className={styles.cartWrapper}>
      <h1 className={styles.cartTitle}>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.cartCard}>
          <img src={item.image} alt={item.title} className={styles.itemImage} />
          <div className={styles.cartInfo}>
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: £{item.price.toFixed(2)}</p>
            <button
              type="button"
              className={Button.danger}
              onClick={(e) => handleRemove(e, item)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      Total: £{totalPrice().toFixed(2)}
    </div>
  );
}
export default ShoppingCart;
