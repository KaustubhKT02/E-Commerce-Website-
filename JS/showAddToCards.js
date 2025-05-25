import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { getCartProductFromLS } from "./getCartProducts.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

let filterProducts = []; // Declare it globally

async function loadCartProducts() {
    const response = await fetch("../API/Product.json");
    const products = await response.json();

    const cartProducts = getCartProductFromLS();

    filterProducts = products.filter((curProd) => {
        return cartProducts.some((curElem) => curElem.id === curProd.id);
    });

    // After loading and filtering products, show them:
    showCartProduct();
}

loadCartProducts();

// Update the addToCart Page 
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate"); 

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { id, name, category, price, stocks, image } = curProd;

        const lsActualData = fetchQuantityFromCartLS(id, price);

        const productClone = document.importNode(templateContainer.content, true); 
        
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".Product-category").textContent = category;
        productClone.querySelector(".Product-img").src = image;
        productClone.querySelector(".Product-img").alt = name;
        productClone.querySelector(".Product-name").textContent = name;
        
        productClone.querySelector(".product-Quantity").textContent = lsActualData.Quantity;
        productClone.querySelector(".product-Price").textContent = `₹${lsActualData.price}`;

        productClone.querySelector(".stock-Element").addEventListener('click', (e) => {
              incrementDecrement(e, id, stocks, price);
            });

        productClone.querySelector(".remove-to-cart-button").addEventListener("click" , ()=> removeProdFromCart(id));

        

        cartElement.appendChild(productClone);
    });
};

// Showing the cart products
showCartProduct();

// calculating the card total in our cartproducts page
updateCartProductTotal();