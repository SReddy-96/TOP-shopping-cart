# Shopping Cart

## Summary

A Shopping app using React, Vite and react-router to create a SPA (single page application). The user is able to browse the items in the shop and add them to a cart.

## Notes

### Components

- App (handling the SPA)
- Home page
- Nav Bar
- Shop page
- Shopping cart
- maybe a component to use as a card for each item pass in the API data

Need to handle a fetch with the

When the user add the product to cart it should be stored in state then passed to shopping cart, store this state in high up in app.

maybe hold in its own and import into app

```
function Product() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("'https://fakestoreapi.com/products'", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setItems(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading/>;
  if (error) return <Error error={error}/>;

  return (items);
};

export default Product;
```

This will be in the ShoppingPage

```
    <>
    items.map((item)=>{
        <div className="itemCard" id={item.id}>
        <p>{item.title}</p>
        <img src={item.image} alt={item.title}/>
        <p>{item.description}</p>
        <button type="submit" onclick={()=> setCartItem(item)}>Add to cart</button>
    </div>
    })
    </>
```

Also, do the fetch in its own function and pass down the data to the children to shop and shopping cart

Setting loading and error pages to handle these

- root
  - This will hold the nav bar and have the outlet for home, shopping page and shopping cart.
  - Pass the product Fetch API from root to ShoppingPage. save to a variable and call the function
- Index
  - This will be the home page and be set as the default
- ShoppingPage
  - This will display the items in cards . taking in an array as
