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
import SliderCart from '@/components/layout/SliderCart.vue'
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

<style lang="scss">
@import "@/assets/styles/layout/shared/NavBar.scss";
</style>