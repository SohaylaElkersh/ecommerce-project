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
          <a class="footer__link" v-for="(link, i) in section.links"  :key="i"  :href="link.url">
            {{ link.name }}
          </a>
        </div>
      </div>

      <div class="footer__app">
        <h3 class="footer__app-title">Download Our App</h3>
        <p class="footer__app-text">Get the exclusive app and save more</p>

        <div class="footer__download">
            <div>
              <img src="@/assets/images/footer/qrcode.jpg" alt="Download QR Code" class="footer__qr"/>
            </div>
            <div class="footer__stores">
              <img src="@/assets/images/footer/playstore.png" alt="Play Store" class="footer__store-link"/>
              <img src="@/assets/images/footer/appstore.jpg" alt="App Store" class="footer__store-link"/>
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

<script setup>
const footerLinks = [
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
]

const socialLinks = [
  { icon: "fa-facebook", url: "#" },
  { icon: "fa-twitter", url: "#" },
  { icon: "fa-instagram", url: "#" },
  { icon: "fa-linkedin-in", url: "#" }  
]
</script>

<style lang="scss">
@import "@/assets/styles/layout/shared/AppFooter.scss";
</style>