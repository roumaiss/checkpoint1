// Importing the product JSON object from the product.js file located one directory up
import product from "../product";

// Defining a functional component called Price
const Price = () => {
  // The component simply returns the price of the product from the imported product object
  return product.price;
};

// Exporting the Price component so it can be used in other parts of the app, like in App.js
export default Price;
