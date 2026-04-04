<template>
  <footer class="footer">
    <div class="container footer__content">

      <div class="footer__brand">
        <h2>Exclusive</h2>
        <h4>Subscribe</h4>
        <p>Get 10% off on your first order</p>
          <div class="newsletter-box">
          <input type="text" placeholder="Enter your email" />
          <svg
            class="send-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
      </div>

      <div class="footer__links">
        <div>
          <h3>Support</h3>
          <a href="#">111 Bijoy sarani, Dhaka, <br> DH 1515, Bangladesh.</a>
          <a href="#">exclusive@gmail.com</a>
          <a href="#">+880 123456789</a>
        </div>

        <div>
          <h3>Account</h3>
          <a href="#">My Account</a>
          <a href="#">Login</a>
          <a href="#">Register</a>
          <a href="">Cart</a>
          <a href="#">Wishlist</a>
          <a href="">Shop</a>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="">FAQ</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div>
        <h3>Download Our App</h3>
        <p>Get the exclusive app and save more</p>
        <div class="download-sec">
            <div>
              <img src="@/assets/footer/qrcode.jpg" alt="Download QR Code" class="qr-code"/>
            </div>
            <div class="store-links">
              <img src="@/assets/footer/playstore.png" alt="Play Store" class="store-link"/>
              <img src="@/assets/footer/appstore.png" alt="App Store" class="store-link"/>
            </div>
        </div>
        <!-- <div class="social-icons">
            <font-awesome-icon icon="facebook" class="social-icon"/>
            <font-awesome-icon icon="twitter" class="social-icon"/>
            <font-awesome-icon icon="instagram" class="social-icon"/>
            <font-awesome-icon icon="linkedin" class="social-icon"/>
        </div> -->
      </div>

    </div>

    <div class="footer__bottom">
      © Copyright Rimmel 2022. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>
.footer {
  background-color: #000; 
  color: #fff; 
  margin-top: 50px;
  font-family: Arial, sans-serif;
  text-align: left;
}

.footer__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 20px 10px;
  max-width: 1200px;
  margin: auto;
  gap: 30px;
}

.footer__brand {
  flex: 1 1 250px;
  min-width: 250px;
}

.footer__brand h2 {
  font-size: 24px;
  margin: 0;
}

.footer__brand p {
  margin: 10px 0 20px 0;
  font-size: 14px;
  color: #fff;
}

.newsletter-box {
  position: relative;
  width: 100%;
  max-width: 140px;
}

.newsletter-box input {
  width: 100%;
  padding: 10px 36px 10px 12px; 
  border: 1px solid #fff;
  border-radius: 4px;
  outline: none;
  background-color: black;
  color: #fff;
  font-size: 14px;
}

.newsletter-box .send-icon {
  position: absolute;
  right: 0px; 
  left: 160px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.footer__links {
  display: flex;
  flex: 2 1 500px;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 20px;
}

.footer__links div {
  flex: 1 1 150px;
  min-width: 0; 
}

.footer__links h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.footer__links a {
  display: block;
  color: #ccc;
  text-decoration: none;
  margin: 20px 0;
  font-size: 14px;
  transition: color 0.2s;
}

.footer__links a:hover {
  color: #fff;
}

.footer__content > div:last-child {
  flex: 1 1 200px;
  min-width: 200px;
}

.download-sec {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

.footer__content .qr-code {
  width: 80px;
  height: 80px;
  margin: 10px 0;
}

.store-links {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 10px 0;
  align-items: left;
}

.store-link {
  width: 100px;
  height: auto;
}

/* .social-icon {
  margin-right: 10px;
  font-size: 20px;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s;
}

.social-icon:hover {
  color: #fff; 
} */

.footer__bottom {
  text-align: center;
  padding: 20px;
  border-top: 1px solid #333;
  font-size: 13px;
  margin-top: 20px;
  color: #ccc;
}

/* Responsive */
@media (max-width: 900px) {
  .footer__content {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer__links {
    flex-direction: column;
    gap: 20px;
  }
  .footer__content > div:last-child {
    margin-top: 30px;
  }
}
</style>