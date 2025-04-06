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
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
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
- ShoppingCart
  - The cart state is found in root which is passed to outlet via context. 
  - The cart with display the users items with price including VAT and total
- Nav
  - this will show the 4 pages with the cart in the right corner and the home, shop and about  in the middle.
- About
  - Just basic about me page with images and generic paragraph about company
- Footer 
  - creating a good footer with links to different pages, terms and other important things. not actually setting the links up
- Testing
  - Using Vitest to test the API and the filling of components
  - Make sure the state is being filled and passed between components


example:
Headline:
Welcome to TOA Shop – Your One-Stop Online Shopping Experience!

Subheadline:
Explore a wide range of products, from electronics to home essentials, all powered by the TOA API.

Body Text:
Looking for high-quality products at great prices? You've come to the right place! Our shop offers a seamless and easy-to-navigate shopping experience, providing you with a variety of items at your fingertips. Whether you're shopping for tech gadgets, fashion, or home goods, TOA has something for everyone.

Browse, shop, and enjoy fast shipping—all in one place.

Call to Action (CTA):
Start Shopping Now!

About Page Text:
Headline:
About TOA Shop

Body Text:
TOA Shop is built with you in mind! We aim to provide a user-friendly online shopping experience, offering an extensive selection of products powered by the TOA API. Our goal is to give you a smooth and efficient way to find the items you need, whether it's the latest gadgets, stylish apparel, or home essentials.

What sets us apart is our focus on simplicity and accessibility. With just a few clicks, you can explore products, add them to your cart, and check out seamlessly. We also ensure that the products on our site are constantly updated, so you never miss out on the latest trends and best deals.

Our mission is simple: Make online shopping easy, fun, and hassle-free for everyone.

Call to Action (CTA):
Have questions? Reach out to our support team anytime!