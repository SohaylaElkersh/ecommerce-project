<template>
  <header class="navbar">
    <div class="container navbar__content">
      
      <div class="navbar__logo">
        <router-link to="/">Exclusive</router-link>
      </div>

      <nav class="navbar__links">
        <router-link v-for="(link, index) in navLinks" :key="index" :to="link.path">
          {{ link.name }}
        </router-link>
      </nav>

      <div class="navbar__actions">
        <div class="search-box">
            <BaseInput class="search-box-base-input" placeholder="What are you looking for?" v-model="search"/>
            <div class="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
        </div>
        <button
          type="button"
          class="cart cart-btn"
          aria-label="Open shopping cart"
          :aria-expanded="cartOpen ? 'true' : 'false'"
          @click="openCart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </button>
      </div>

    </div>

    <transition name="cart-overlay">
      <div
        v-if="cartOpen"
        class="cart-drawer__overlay"
        aria-hidden="true"
        @click="closeCart"
      />
    </transition>
    <transition name="cart-slide">
      <aside
        v-if="cartOpen"
        class="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
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

.container {
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

.navbar__logo a {
  font-weight: bold;
  color: #000;
  text-decoration: none;
  font-size: 23px;
}

.navbar__links a {
  display: inline-block;
  margin: 0 25px;
  text-decoration: none;
  color: #333;
  transition: transform 0.5s ease, color 0.5s ease;
}

.navbar__links a:hover {
  color: #000;
  text-decoration: underline;
  transform: scale(1.1);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-box {
  position: relative;
  margin-right: 70px;
}

.search-box-base-input {
  width: 240px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
  cursor: pointer;
}

.cart-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.cart-btn:focus-visible {
  outline: 2px solid #db4444;
  outline-offset: 2px;
}

.cart-drawer__overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.45);
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