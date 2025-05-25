import { getCartProductFromLS } from "./getCartProducts.js";

export const fetchQuantityFromCartLS= (id, price) => {
    let cartProducts = getCartProductFromLS();

    let existingProduct = cartProducts.find((curProd) => curProd.id === id);
    let Quantity = 1 

    if(existingProduct) {
        Quantity = existingProduct.Quantity;
        price = existingProduct.price;
    }

    return {Quantity, price};

};