import { addToCart } from "../js/product-page.js";

// Adding the products to html
export const showProducts = products => {
  let productFragment = document.createDocumentFragment();

// Creates one product for every product in the database
  for (let i = 0; i < products.length; i++) {
    let product = document.createElement("div"); 
    product.className = "product";

// Appends to parent div (product)
    addImage(product, products, i);
    addTitle(product, products, i);
    addPrice(product, products, i);
    addButton(product, products, i);

    productFragment.appendChild(product); 
  }

  document.querySelector(".product-container").appendChild(productFragment); 
};

// Appends Image to product
const addImage = (product, products, i) => {
  let productImage = document.createElement("img");
  productImage.src = products[i].img;
  product.appendChild(productImage);
};

// Appends Title to product
const addTitle = (product, products, i) => {
  let productTitle = document.createElement("h2");
  productTitle.innerHTML = products[i].name;
  product.appendChild(productTitle);
};

// Appends Price to product
const addPrice = (product, products, i) => {
  let productPrice = document.createElement("h3");
  productPrice.innerHTML = products[i].price + " kr";
  product.appendChild(productPrice);
};

// Appends Button to product
const addButton = async (product, products, i) => {
  let productButton = document.createElement("button");
  productButton.id = "button-" + i;
  productButton.innerHTML = "Add to cart";
  checkIfInCart(i); 
  productButton.addEventListener("click", () => {
    addToCart(products[i].id); 
  });
  product.appendChild(productButton);
};

// Changes innerHTML of button if it exists in cart
const checkIfInCart = async productId => {
  let cartId = await fetchCartId(productId);
  if (cartId) {
    document.querySelector("#button-" + cartId).innerHTML =
      "Product already in cart";
  }
};

// Returns the cartId if it exists
const fetchCartId = async i => {
  let id;
  await fetch("/cart")
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.data[i]) {
        id = data.data[i].id;
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  return id;
};
