import { Link } from "react-router-dom";
import styles from "./nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <h1>TOA</h1>
      </div>
      <div className={styles.pages}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="shop" className={styles.link}>Shop</Link>
        <Link to="about" className={styles.link}>About</Link>
      </div>
      <div className={styles.cart}>
        <Link to="cart" className={styles.link}>Cart</Link>
      </div>
    </div>
  );
}

export default Nav;
