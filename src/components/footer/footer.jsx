import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>About Us</h4>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Customer Service</h4>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Information</h4>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Stay Connected</h4>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Newsletter Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
