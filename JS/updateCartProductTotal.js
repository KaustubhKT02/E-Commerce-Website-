import { getCartProductFromLS } from "./getCartProducts.js";
export const updateCartProductTotal = () => {
    
    const subTotal = document.querySelector(".productSubTotal");
    const finalTotal = document.querySelector(".productFinalTotal");

    let localCartProducts = getCartProductFromLS();
    let initialValue = 0
    let totalProductsPrice = localCartProducts.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice 
    }, initialValue);

    subTotal.textContent = `₹ ${totalProductsPrice}`;
    finalTotal.textContent = `₹ ${totalProductsPrice + 50}`;
};
