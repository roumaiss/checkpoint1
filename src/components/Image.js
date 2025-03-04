// Importing the product JSON object from the product.js file located one directory up
import product from "../product";

// Defining a functional component called Image
const Image = () => {
  // The component simply returns the image URL of the product from the imported product object
  return product.image;
};

// Exporting the Image component so it can be used in other parts of the app, like in App.js
export default Image;
