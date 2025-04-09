import styles from "./index.module.css";
import Carousel from "../carousel/carousel";

const contents = [
  {
    text: "review 1",
    reviewer: "steve",
  },
  {
    text: "review 2",
    reviewer: "steve",
  },
  {
    text: "review 3",
    reviewer: "steve",
  },
  {
    text: "review 4",
    reviewer: "steve",
  },
  {
    text: "review 5",
    reviewer: "steve",
  },
  {
    text: "review 6",
    reviewer: "steve",
  },
];

function Index() {
  return (
    <div className={styles.indexWrapper}>
      <h1 className={styles.title}>TOA</h1>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="./images/landingImage.jpg"
          alt="image of shop floor"
        />
      </div>
      <div className={styles.headline}>
        <p>Welcome to TOA Shop – Your One-Stop Online Shopping Experience!</p>
      </div>
      <div className={styles.description}>
        <img
          src="./images/indexDescription.jpg"
          alt="image of clothes on rail"
          className={styles.descriptionImage}
        />
        <p className={styles.descriptionText}>
          Looking for high-quality products at great prices? You've come to the
          right place! Our shop offers a seamless and easy-to-navigate shopping
          experience, providing you with a variety of items at your fingertips.
          Whether you're shopping for tech gadgets, fashion, or home goods, TOA
          has something for everyone.
        </p>
      </div>
      <Carousel contents={contents} />
    </div>
  );
}
export default Index;
