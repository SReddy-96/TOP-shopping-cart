import styles from "./about.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.heroText}>About Us</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.gridRow}>
          <div className={styles.imageBlock}>
            <img src="./images/mission.jpg" alt="Our Mission" />
          </div>
          <div className={styles.textBlock}>
            <h2>Our Mission</h2>
            <p>
              At TOA, we're on a mission to make online shopping simple,
              reliable, and enjoyable. Our platform brings you a curated
              selection of quality items that suit your everyday needs — with no
              clutter, no confusion, just straight-up value.
            </p>
          </div>
        </div>

        <div className={styles.gridRowAlt}>
          <div className={styles.textBlock}>
            <h2>Why We Built TOA</h2>
            <p>
              We created TOA to give people a cleaner, faster, and more
              intuitive shopping experience. Our streamlined approach means less
              time searching and more time enjoying what matters. Whether you're
              browsing from the couch or on-the-go, TOA is designed to feel
              effortless.
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img src="./images/why.jpg" alt="Why TOA" />
          </div>
        </div>

        <div className={styles.gridRow}>
          <div className={styles.imageBlock}>
            <img src="./images/values.jpg" alt="Our Values" />
          </div>
          <div className={styles.textBlock}>
            <h2>Our Values</h2>
            <p>
              Transparency, simplicity, and user-first thinking guide everything
              we do. We believe online shopping should be accessible to everyone
              — and we’re constantly evolving to make sure your experience stays
              smooth, secure, and satisfying.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
