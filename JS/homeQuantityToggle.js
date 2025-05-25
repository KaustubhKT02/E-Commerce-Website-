export const homeQuantityToggle = (e, id, stocks) =>{
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuanitity = currentCardElement.querySelector(".product-Quantity")
    var Quantity = parseInt(productQuanitity.getAttribute('data-quantity')) || 1;

    if (e.target.className === "cart-Increement") {
        if (Quantity < stocks) {
            Quantity += 1;
        } else if (Quantity === stocks) {
            Quantity = stocks;
        }
    }

    if (e.target.className === "cart-Decreement") {
        if( Quantity > 1) {
            Quantity -= 1;
        }
    }

    productQuanitity.innerText = Quantity;
    productQuanitity.setAttribute('data-quantity', Quantity);
    return Quantity

}