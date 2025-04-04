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
  const handleChange = (event, product, quantity) => {
    event.preventDefault();
    const check = cartItems.find((item) => item.id === product.id);
    const errorSpan =
      event.target.nextElementSibling || event.target.previousElementSibling;

    // check if quantity is valid
    if (quantity < 1 || !quantity) {
      errorSpan.textContent = "Quantity needs to be more than 0";
      return;
    } else {
      errorSpan.textContent = "";
    }
    if (check) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: quantity };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      throw Error;
    }
  };

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
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className={styles.cartCard}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.itemImage}
            />
            <div className={styles.cartInfo}>
              <p>{item.title}</p>

              <label htmlFor={item.id}>
                Quantity:
                <input
                  id={item.id}
                  type="number"
                  name="quantity"
                  defaultValue={item.quantity}
                  className={styles.quantityInput}
                  min="1"
                  required
                  onChange={(e) =>
                    handleChange(e, item, parseInt(e.target.value))
                  }
                />
                <span className={styles.errorSpan}></span>
              </label>
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
        ))
      ) : (
        <h2 className={styles.noItems}>No items</h2>
      )}
      Total: £{totalPrice().toFixed(2)}
    </div>
  );
}
export default ShoppingCart;
