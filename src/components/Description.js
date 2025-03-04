// Importing the product JSON object from the product.js file located one directory up
import product from "../product";

// Defining a functional component called Description
export default function Description() {
  // The component simply returns the description of the product from the imported product object
  return product.description;
}
