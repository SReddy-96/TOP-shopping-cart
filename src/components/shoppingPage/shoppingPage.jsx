import { useOutletContext } from "react-router-dom";
import ErrorPage from "../../error-page";
import useProduct from "../../productFetch";
import styles from "./shoppingPage.module.css";

function ShoppingPage() {
  const { items, loading, error } = useProduct();
  const { cartItems, setCartItems } = useOutletContext();

  if (loading) return <h1 className={styles.shopLoading}>Loading...</h1>;
  if (error) throw error;

  const handleClick = (event, product) => {
    event.preventDefault();
    const check = cartItems.find((item) => item.id === product.id);
    if (check) {
      console.log(cartItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <>
      <h1 className={styles.shopTitle}>Shop</h1>
      <div className={styles.shopContent}>
        {items.map((item) => (
          <div className={styles.itemCard} id={item.id} key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <button type="submit" onClick={(e) => handleClick(e, item)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default ShoppingPage;
