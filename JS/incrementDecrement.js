import { getCartProductFromLS } from "./getCartProducts.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

export const incrementDecrement = (e, id, stocks, price) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuanitity = currentCardElement.querySelector(".product-Quantity");
    const productPrice = currentCardElement.querySelector(".product-Price");

    let Quantity = 1;
    let localStoragePrice = 0;

    // get the data from localstorage.
    let localCartProducts = getCartProductFromLS();

    let existingProd = localCartProducts.find((curProd) => curProd.id === id); 

    if (existingProd) {
        Quantity = existingProd.Quantity;
        localStoragePrice = existingProd.price;
    } else {
        localStoragePrice = price;
        price = price;
    }

    if (e.target.className === "cart-Increement") {
        if (Quantity < stocks) {
            Quantity += 1;
        } else if (Quantity === stocks) {
            Quantity = stocks;
            localStoragePrice = price * stocks;
        }
    }

    if (e.target.className === "cart-Decreement") {
        if( Quantity > 1) {
            Quantity -= 1;
        }
    }


    // update the price in loclastorage 
    localStoragePrice = price * Quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));
    

    let updatedCart = {id, Quantity, price: localStoragePrice};
    updatedCart = localCartProducts.map((curProd) => {
       return (curProd.id === id) ? updatedCart : curProd;
    });

    // console.log(updatedCart);

    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));

    // reflect the changes on the screen too
    productQuanitity.innerText = Quantity;
    productPrice.innerText= localStoragePrice;

    // calculating the card total in our cartproducts page
    
    updateCartProductTotal();
    
};

