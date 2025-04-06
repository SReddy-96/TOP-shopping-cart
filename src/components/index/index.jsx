import styles from "./index.module.css"

function Index() {
  return (
    <>
      <h1 className={styles.title}>TOA</h1>
      <img className={styles.image} src="./images/landingImage.jpg" alt="image of shop floor" />
    </>
  );
}
export default Index;
