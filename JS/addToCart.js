import { getCartProductFromLS } from "./getCartProducts.js";
import { showToast } from "./showTost.js";
import { updateCartValue } from "./updateCartValue.js";
getCartProductFromLS();

export const addToCart = (e, id, stocks) => {
    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProductElement = document.querySelector(`#card${id}`);
    let Quantity = currentProductElement.querySelector('.product-Quantity').innerText;
    let price = currentProductElement.querySelector('.product-Price').innerText;

    price = price.replace("₹", "");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);
    if (existingProd && Quantity > 1) {
        Quantity = Number(existingProd.Quantity) + Number(Quantity);
        price = Number(price * Quantity);

        let updatedCart = {id, Quantity, price};
        updatedCart = arrLocalStorageProduct.map((curProd) => {
           return (curProd.id === id) ? updatedCart : curProd;
        });
    
        console.log(updatedCart);
    
        localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));

        // show toast when product added to the cart
            showToast("add", id)
    }

    if (existingProd) {
        return false;
    }

    price = Number(price * Quantity);
    price = Number(price.toFixed(2));
    Quantity = Number(Quantity)

    
    arrLocalStorageProduct.push({id, Quantity, price});
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
    // show toast when product added to the cart
    showToast("add", id)
};


 































































