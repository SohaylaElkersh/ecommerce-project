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

<script setup>
defineOptions({
  name: 'AppNavbar'
})

import SliderCart from '@/components/layout/SliderCart.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import { useCartStore } from '@/store/cart'
import { computed } from 'vue'
import { ref, watch, onBeforeUnmount } from 'vue'

const cartStore = useCartStore()
const cartOpen = ref(false)
const search = ref('')
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Contact Us", path: "/contact" },
  { name: "About Us", path: "/about" }  
]

const cartItemCount = computed(() => cartStore.cartItemCount)

function openCart() {
  cartOpen.value = true
}

function closeCart() {
  cartOpen.value = false
}

function onEscape(e) {
  if (e.key === 'Escape') {
    closeCart()
  }
}

watch(cartOpen, (open) => {
  document.documentElement.classList.toggle('cart-drawer-open', open)
  if (open) {
    document.addEventListener('keydown', onEscape)
  } else {
    document.removeEventListener('keydown', onEscape)
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onEscape)
  document.documentElement.classList.remove('cart-drawer-open')
})
</script>

<style lang="scss">
@import "@/assets/styles/layout/shared/NavBar.scss";
</style>