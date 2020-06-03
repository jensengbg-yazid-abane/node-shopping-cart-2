import { showProducts } from "../modules/product-load.js";

// Fetches all products then start the showProduct()  
const loadProducts = () => {
  fetch("/products")
    .then(response => {
      return response.json();
    })
    .then(allProducts => {
      console.log(allProducts);
      showProducts(allProducts.productPage); 
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

loadProducts();

// Adds product to cart
export const addToCart = id => {
  fetch("/cart/add/" + id, {
    method: "POST"
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.querySelector(`#button-${id}`).innerHTML = data.info; 
    })
    .catch(error => {
      console.error("Error:", error);
    });
};
