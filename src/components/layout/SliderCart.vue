<template>
  <div class="cart-drawer">
    <div class="cart-drawer__header">
      <h1 class="cart-drawer__title">Shopping Cart</h1>
      <button type="button" class="cart-drawer__close" aria-label="Close shopping cart" @click="$emit('close')">
        <i class="fa-regular fa-circle-xmark" aria-hidden="true"></i>
      </button>
    </div>
    <div class="cart-drawer__content">
      <div class="cart-drawer__inner">
        <div v-if="cartProducts.length > 0" class="cart-drawer__items">
          <CartCard v-for="product in cartProducts" :key="product.id" :product="product"/>
        </div>
        <PaymentSection class="cart-drawer__payment-section" v-if="cartProducts.length > 0"/>
        <div v-else class="cart-drawer__empty">
          <h1 class="cart-drawer__empty-title">Your Cart is Empty!</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartCard from '@/components/cart/CartCard.vue'
import PaymentSection from '@/components/cart/PaymentSection.vue';
import { useCartStore } from '@/store/cart'
import { computed } from 'vue';

const cartStore = useCartStore()
const cartProducts = computed(() => cartStore.cartProducts)
</script>

<style lang="scss">
@import "@/assets/styles/layout/shared/SliderCart.scss";
</style>