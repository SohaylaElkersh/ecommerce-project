<template>
  <header class="navbar">
    <div class="navbar__container navbar__content">
      <div class="navbar__logo">
        <router-link class="navbar__logo-link" to="/">Exclusive</router-link>
      </div>
      <nav class="navbar__links">
        <router-link v-for="(link, index) in navLinks" :key="index" :to="link.path" class="navbar__link">
          {{ link.name }}
        </router-link>
      </nav>
      <div class="navbar__actions">
        <div class="navbar__search">
          <BaseInput class="navbar__search-input" placeholder="What are you looking for?" v-model="search"/>
          <div class="navbar__search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <button type="button" class="navbar__cart" aria-label="Open shopping cart"
          :aria-expanded="cartOpen ? 'true' : 'false'" @click="openCart">
          <i class="fa-solid fa-cart-shopping"></i>
          <span v-if="cartItemCount > 0" class="navbar__cart-badge">{{ cartItemCount }}</span>
        </button>
      </div>
    </div>

    <transition name="cart-overlay">
      <div v-if="cartOpen" class="cart-drawer__overlay" aria-hidden="true" @click="closeCart"/>
    </transition>

    <transition name="cart-slide">
      <aside v-if="cartOpen" class="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping cart">
        <SliderCart @close="closeCart" />
      </aside>
    </transition>
  </header>
</template>

<script>
import SliderCart from '@/components/layout/shared/SliderCart.vue'
import BaseInput from '@/components/UI/BaseInput.vue'

export default {
  name: "AppNavbar",
  components: { 
    SliderCart, 
    BaseInput 
  },
  data() {
    return {
      cartOpen: false,
      search: '',
      navLinks: [
        { name: "Home", path: "/" },
        { name: "Explore", path: "/explore" },
        { name: "Contact Us", path: "/contact" },
        { name: "About Us", path: "/about" }
      ]
    }
  },
  computed: {
    cartItemCount() {
      return this.$store.getters['cart/cartItemCount'];
    }
  },
  watch: {
    cartOpen(open) {
      document.documentElement.classList.toggle('cart-drawer-open', open)
      if (open) {
        document.addEventListener('keydown', this.onEscape)
      } else {
        document.removeEventListener('keydown', this.onEscape)
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onEscape)
    document.documentElement.classList.remove('cart-drawer-open')
  },
  methods: {
    openCart() {
      this.cartOpen = true
    },
    closeCart() {
      this.cartOpen = false
    },
    onEscape(e) {
      if (e.key === 'Escape') {
        this.closeCart()
      }
    },
  },
}
</script>

<style scoped>
.navbar {
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: 50px;
}

.navbar__container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.navbar__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.navbar__logo-link {
  font-weight: bold;
  color: #000;
  text-decoration: none;
  font-size: 23px;
}

.navbar__link {
  display: inline-block;
  margin: 0 25px;
  text-decoration: none;
  color: #333;
  transition: transform 0.5s ease, color 0.5s ease;
}

.navbar__link:hover {
  color: #000;
  text-decoration: underline;
  transform: scale(1.1);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.navbar__search {
  position: relative;
  margin-right: 70px;
}

.navbar__search-input {
  width: 240px;
}

.navbar__search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #555;
  cursor: pointer;
  transition: all 0.5s ease;
  font-size: 15px;
}
  
.navbar__search-icon i {
  transition: all 0.5s ease;
}

.navbar__search-icon i:hover {
  transform: scale(1.2);  
}

.navbar__cart {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.5s ease;
  position: relative;
}

.navbar__cart:hover {
  transform: scale(1.2);
}

.navbar__cart-badge {
  position: absolute;
  top: -10px;
  left: 15px;
  background: #db4444;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  padding: 3px 0px;
  border-radius: 50%;
  min-width: 18px;
  text-align: center;
}

.cart-drawer__overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
}

.cart-overlay-enter-active,
.cart-overlay-leave-active {
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.cart-overlay-enter,
.cart-overlay-leave-to {
  opacity: 0;
}

.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  left: auto;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  width: min(550px, 100vw);
  height: 100vh;
  max-height: 100vh;
  background: #fff;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  box-sizing: border-box;
}

.cart-slide-enter-active,
.cart-slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.cart-slide-enter,
.cart-slide-leave-to {
  transform: translateX(100%);
}

.cart-slide-enter-to,
.cart-slide-leave {
  transform: translateX(0);
}
</style>

<style>
html.cart-drawer-open {
  overflow: hidden;
}
</style>