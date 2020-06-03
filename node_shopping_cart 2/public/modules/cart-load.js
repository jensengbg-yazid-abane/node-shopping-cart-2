import { removeCartItem } from "../js/cart.js";

//Adding the cart-items to html
export const showCart = cartItems => {
  let cartFragment = document.createDocumentFragment(); 

// Creates the items in cart
  for (let i = 0; i < cartItems.length; i++) {
    let cartItem = document.createElement("div"); 
    cartItem.className = "item";
    cartItem.id = "item" + cartItems[i].id; 

// Appends to parent div (item)
    addImage(cartItem, cartItems, i);
    addTitle(cartItem, cartItems, i);
    addPrice(cartItem, cartItems, i);
    addButton(cartItem, cartItems, i);

    cartFragment.appendChild(cartItem);
  }

  document.querySelector(".cart-container").appendChild(cartFragment); 
};

// Appends Image to Item
const addImage = (cartItem, cartItems, i) => {
  let itemImage = document.createElement("img");
  itemImage.src = cartItems[i].img;
  cartItem.appendChild(itemImage);
};

// Appends Title to Item
const addTitle = (cartItem, cartItems, i) => {
  let itemTitle = document.createElement("h2");
  itemTitle.innerHTML = cartItems[i].name;
  cartItem.appendChild(itemTitle);
};

// Appends Price to Item
const addPrice = (cartItem, cartItems, i) => {
  let itemPrice = document.createElement("h3");
  itemPrice.innerHTML = cartItems[i].price + " kr";
  cartItem.appendChild(itemPrice);
};

// Appends Button to Item
const addButton = (cartItem, cartItems, i) => {
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "X";
  removeButton.id = "remove-button-" + i;
  removeButton.addEventListener("click", () => {
    removeCartItem(cartItems[i].id); 
  });
  cartItem.appendChild(removeButton);
};
