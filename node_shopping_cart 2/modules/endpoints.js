// Imports
const express = require("express");
const router = express.Router(); 
const db = require("./functions"); 

//End points

// Get All The Products
router.get("/products", async (req, res) => {
  const allProducts = await db.getProducts();
  let info = {
    productPage: allProducts
  };
  res.send(info);
});

//Get Cart Items
router.get("/cart", async (req, res) => {
  const data = await db.getCart();
  let info = {
    message: "Cart items",
    data: data
  };
  res.send(info);
});

//Add Item to Cart
router.post("/cart/add/:id", async (req, res) => {
  const item = await db.getProduct(req.params.id); 

  if (!item) {
    res.status(400).send("Product does not exist");
  } else {
    const addedItem = await db.addToCart(item);

    if (addedItem) {
      let info = {
        info: "Product added to cart",
        data: addedItem
      };
      res.send(info); 
    } else {
      let info = {
        info: "Product already in cart",
        data: item
      };
      res.send(info); 
    }
  }
});

//Remove Item from Cart
router.delete("/cart/remove/:id", async (req, res) => {
  const deletedItem = await db.removeFromCart(req.params.id);

  if (!deletedItem) {
    let info = {
      info: "No such product in your cart"
    };
    res.status(400).send(info);
  } else {
    let info = {
      info: "Product removed from cart",
      data: deletedItem
    };
    res.send(info); 
  }
});

module.exports = router; 
