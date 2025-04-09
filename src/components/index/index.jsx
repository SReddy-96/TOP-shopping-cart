import styles from "./index.module.css";
import Carousel from "../carousel/carousel";

const contents = [
  {
    text: "This product exceeded my expectations, the quality is fantastic!",
    author: "Alice Brown",
  },
  {
    text: "Fast shipping and excellent customer service. Will definitely shop here again.",
    author: "John Smith",
  },
  {
    text: "The item arrived on time and was exactly as described. Very happy with my purchase.",
    author: "Emily Johnson",
  },
  {
    text: "I love this store! Great selection and affordable prices.",
    author: "Michael Davis",
  },
  {
    text: "Fantastic experience! The product works perfectly and was easy to set up.",
    author: "Sarah Williams",
  },
  {
    text: "Very satisfied with my purchase. The quality is top-notch and the delivery was quick.",
    author: "James Wilson",
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
