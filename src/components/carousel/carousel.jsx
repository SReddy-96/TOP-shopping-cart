
import styles from "./carousel.module.css";

function Carousel({ contents }) {

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselHolder}>
        {contents.map((content, index) => (
          <div key={index} className={styles.contentItem}>
            <p>{content.text}</p>
            <p>- {content.reviewer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Carousel;
