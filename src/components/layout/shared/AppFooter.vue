<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__brand">
        <h2 class="footer__title">Exclusive</h2>
        <h4 class="footer__subtitle">Subscribe</h4>
        <p class="footer__text">Get 10% off on your first order</p>

        <div class="footer__newsletter">
          <input class="footer__input" type="text" placeholder="Enter your email" />
          <div class="footer__send-icon">
            <i class="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>

      <div class="footer__links">
        <div class="footer__links-section" v-for="(section, index) in footerLinks" :key="index">
          <h3 class="footer__links-title">{{ section.title }}</h3>
      
          <a 
            class="footer__link" v-for="(link, i) in section.links"  :key="i"  :href="link.url">
            {{ link.name }}
          </a>
        </div>
      </div>

      <div class="footer__app">
        <h3 class="footer__app-title">Download Our App</h3>
        <p class="footer__app-text">Get the exclusive app and save more</p>

        <div class="footer__download">
            <div>
              <img src="@/assets/footer/qrcode.jpg" alt="Download QR Code" class="footer__qr"/>
            </div>
            <div class="footer__stores">
              <img src="@/assets/footer/playstore.png" alt="Play Store" class="footer__store-link"/>
              <img src="@/assets/footer/appstore.jpg" alt="App Store" class="footer__store-link"/>
            </div>
        </div>

        <div class="footer__socials">
          <a v-for="(social, index) in socialLinks" :key="index" :href="social.url">
            <i :class="['fa-brands', social.icon, 'footer__social-icon']"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      © Copyright Rimmel 2022. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      footerLinks: [
        {
          title: "Support",
          links: [
            { name: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.", url: "#" },
            { name: "exclusive@gmail.com", url: "#" },
            { name: "+880 123456789", url: "#" }
          ]
        },
        {
          title: "Account",
          links: [
            { name: "My Account", url: "#" },
            { name: "Login", url: "#" },
            { name: "Register", url: "#" },
            { name: "Cart", url: "#" },
            { name: "Wishlist", url: "#" },
            { name: "Shop", url: "#" }
          ]
        },
        {
          title: "Quick Links",
          links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" },
            { name: "FAQ", url: "#" },
            { name: "Contact", url: "#" }
          ]
        }
      ],
      socialLinks: [
        { icon: "fa-facebook", url: "#" },
        { icon: "fa-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
        { icon: "fa-linkedin-in", url: "#" }
      ]
    }
  }
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

.footer__title {
  font-size: 24px;
  margin: 0;
}

.footer__text {
  margin: 10px 0 20px 0;
  font-size: 14px;
  color: #fff;
}

.footer__newsletter {
  position: relative;
  width: 100%;
  max-width: 140px;
}

.footer__input {
  width: 100%;
  padding: 10px 36px 10px 12px; 
  border: 1px solid #fff;
  border-radius: 4px;
  outline: none;
  background-color: black;
  color: #fff;
  font-size: 14px;
}

.footer__send-icon {
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

.footer__send-icon i {
  transition: all 0.5s ease;
}

.footer__send-icon i:hover {
  transform: scale(1.1);
} 

.footer__links {
  display: flex;
  flex: 2 1 500px;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 20px;
}

.footer__links-section {
  flex: 1 1 150px;
  min-width: 0; 
}

.footer__links-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.footer__link {
  display: block;
  color: #ccc;
  text-decoration: none;
  margin: 20px 0;
  font-size: 14px;
  transition: color 0.2s;
}

.footer__link:hover {
  color: #fff;
}

.footer__app {
  flex: 1 1 200px;
  min-width: 200px;
}

.footer__download {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

.footer__qr {
  width: 80px;
  height: 80px;
  margin: 10px 0;
}

.footer__stores {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  margin: 10px 0;
}

.footer__store-link {
  width: 100px;
  height: auto;
}

.footer__socials {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.footer__social-icon {
  color: #fff;
  font-size: 20px;
  transition: all 0.5s ease; 
}

.footer__social-icon:hover {
  transform: scale(1.2);
}

.footer__bottom {
  text-align: center;
  padding: 20px;
  border-top: 1px solid #333;
  font-size: 13px;
  margin-top: 20px;
  color: #ccc;
}

@media (max-width: 900px) {
  .footer__content {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer__links {
    flex-direction: column;
    gap: 20px;
  }
  .footer__app {
    margin-top: 30px;
  }
}
</style>