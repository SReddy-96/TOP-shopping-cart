import ErrorPage from "../../error-page";
import useProduct from "../../productFetch";

function ShoppingPage() {
  const { items, loading, error } = useProduct();

  if (loading) return <h1>Loading...</h1>;
  if (error) throw error;

  return (
    <>
      {items.map((item) => (
        <div className="itemCard" id={item.id} key={item.id}>
          <p>{item.title}</p>
          <img src={item.image} alt={item.title} />
          <p>{item.description}</p>
          <button type="submit">Add to cart</button>
        </div>
      ))}
    </>
  );
}
export default ShoppingPage;
