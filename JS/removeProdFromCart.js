import { getCartProductFromLS } from "./getCartProducts.js";
import { showToast } from "./showTost.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProdFromCart = (id) => {
let cartProducts = getCartProductFromLS(); 
cartProducts = cartProducts.filter((curProd) => curProd.id != id);

// update the local storage after removing.

localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));

let removeDiv = document.getElementById(`card${id}`);

// to remove div onclick
if(removeDiv) {
    removeDiv.remove();

    // show toast when product added to the cart
    showToast("delete", id)
}

updateCartValue(cartProducts);

// calculating the card total in our cartproducts page
updateCartProductTotal();

}