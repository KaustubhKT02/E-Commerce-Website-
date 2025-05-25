import { showProductContainer } from "./JS/HomeProductCard.js"; // Ensure correct path and `.js` extension

fetch("/API/Product.json") 
   .then(response => response.json()) // Correctly parse JSON
   .then(product => {
       console.log(product); // Check if data is correctly loaded
       showProductContainer(product); // Call function with fetched data
   })
   .catch(error => console.error("Error loading file:", error));