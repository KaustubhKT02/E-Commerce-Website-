const footerHTML = `
 <footer class="footer-section">
            <div class="container">
                <div class="footer-col1">
                    <div class="company-logo">
                        <img src="/Assets/Tripathi store.png" alt="Company logo" >
                    </div>

                    <p class="text">
                        Welcome to Tripathi EcomStore. Your ultimate destination for Cutting-edge gadgets!
                    </p>

                    <div class="credit-card-img flex">
                        <img src="/Assets/credit card png/American Expree.png" alt="American Express" width="50px" height="auto">
                        <img src="/Assets/credit card png/Master Card.png" alt="Master Card" width="50px" height="auto">
                        <img src="/Assets/credit card png/RuPay.png" alt="RuPay" width="50px" height="auto">
                        <img src="/Assets/credit card png/PayPal.png" alt="PayPal" width="50px" height="auto">
                        <img src="/Assets/credit card png/VISA.png" alt="VISA" width="50px" height="auto">
                    </div>
                </div>

                <div class="footer-col2 flex">
                    <h3 class="footer-heading">SHOPPING</h3>

                    <a href="#">Computer Store</a>
                    <a href="#">Laptop Store</a>
                    <a href="#">Accessories</a>
                    <a href="#">Sales & Discount</a>
                </div>


                <div class="footer-col3 flex">
                    <h3 class="footer-heading">Experience</h3>
    
                    <a href="#">Contact us</a>
                    <a href="#">Payment Method</a>
                    <a href="#">Delivary</a>
                    <a href="#">Return & Replacement</a>
                </div>

                <div class="footer-col4 flex">
                    <h3 class="footer-heading">Connect With Us</h3>

                    <a href="#"><i class="fa-brands fa-facebook"></i> Facebook</a>
                    <a href="#"><i class="fa-brands fa-twitter"></i> Twitter</a>
                    <a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a>
                    <a href="#"><i class="fa-brands fa-youtube"></i> Youtube</a>
                </div>
            </div> 
            <hr>
            <section class="copyright">
                <p>Design and Code by Kaustubh Tripathi</p>
            </section>
`

const footerElem = document.querySelector(".footer-section");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);