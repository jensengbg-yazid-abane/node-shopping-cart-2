import { showCart } from "../modules/cart-load.js";
import { updateTotalPrice, totalPrice } from "../modules/cart-calc.js";

// Fetch cart items
const loadCart = () => {
  fetch("/cart")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      showCart(data.data); 
      totalPrice(data.data); 
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

loadCart();

// Remove item
export const removeCartItem = id => {
  fetch("/cart/remove/" + id, {
    method: "DELETE"
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      let item = document.getElementById("item" + id);
      item.parentNode.removeChild(item); 
      updateTotalPrice(); 
    })
    .catch(error => {
      console.error("Error:", error);
    });
};
