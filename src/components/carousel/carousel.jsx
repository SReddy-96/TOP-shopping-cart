import { useState } from "react";
import styles from "./carousel.module.css";

function Carousel({ contents }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  // Previous Review
  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contents.length) % contents.length
    );
  };

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.prev} onClick={prevReview}>
        ❮
      </button>
      <div className={styles.carouselHolder}>
        <p>⭐️⭐️⭐️⭐️⭐️</p>
        <p>"{contents[currentIndex].text}"</p>
        <h4>
          {" "}
          - <i>{contents[currentIndex].author}</i>
        </h4>
      </div>
      <button className={styles.next} onClick={nextReview}>
        ❯
      </button>
    </div>
  );
}
export default Carousel;
