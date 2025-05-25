import { addToCart } from "./addToCart.js";
import { homeQuantityToggle } from "./homeQuantityToggle.js";



const productContainer = document.querySelector("#product-container");
const productTemplet = document.querySelector("#product-template") 


export const showProductContainer = (product) => {
   if(!product) {
    return false;
   }

  product.forEach((currProd) => {
    const {id, name, category, brand, price, stocks, description,image, actualPrice} = currProd;

    const productClone = document.importNode(productTemplet.content, true);

    productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);

    productClone.querySelector(".Product-name").textContent = name;
    productClone.querySelector(".Product-img").src = image;
    productClone.querySelector(".Product-img").alt = name;
    productClone.querySelector(".product-Stocks").textContent = stocks;
    productClone.querySelector(".product-description").textContent = description;
    productClone.querySelector(".Product-category").textContent = category;
    productClone.querySelector(".product-Price").textContent = `₹ ${price}`;
    productClone.querySelector(".product-Actual-price").textContent = `₹ ${actualPrice}`;

    // Product Quantity toggle
    productClone.querySelector(".stock-Element").addEventListener('click', (e) => {
      homeQuantityToggle(e, id, stocks);
    });

    // Product Add-To-Cart
    productClone.querySelector(".add-to-cart-button").addEventListener('click', (e) => {
      addToCart(e, id,  stocks);
    })

    productContainer.append(productClone);

  });

};