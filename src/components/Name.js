// Importing the product JSON object from the product.js file located one directory up
import product from "../product";

// Defining a functional component called Name
const Name = () => {
  // The component simply returns the name of the product from the imported product object
  return product.name;
};

// Exporting the Name component so it can be used in other parts of the app, like in App.js
export default Name;
