<template>
  <div class="payment-section">
    <div class="payment-section__summary">
      <div class="payment-section__row" v-for="(amount, index) in money" :key="index">
        <p>{{ amount.title }}:</p>
        <p>${{ amount.amount }}</p>
      </div>
      <div class="payment-section__methods">
        <h4>Payment Method:</h4>
        <div class="payment-section__method">
          <input type="radio" id="bank" name="method" />
          <label for="bank">Bank</label>
        </div>
        <div class="payment-section__method">
          <input type="radio" id="cash" name="method" />
          <label for="cash">Cash on delivery</label>
        </div>
      </div>
    </div>
    <div class="payment-section__coupon">
      <BaseInput class="payment-section__coupon-input" type="text" placeholder="Coupon Code"/>
      <BaseButton>Apply</BaseButton>
    </div>
    <BaseButton class="payment-section__order-button">Place Order</BaseButton>
  </div>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseInput from '@/components/UI//BaseInput.vue';
import { useCartStore } from '@/store/cart.js'
import { computed } from 'vue'

const cartStore = useCartStore()
const subtotal = computed(() => cartStore.cartTotal)
const shipping = computed(() => subtotal.value * 0.1)      //shipping is 1% of the subtotal
const total = computed(() => subtotal.value + shipping.value)
const money = computed(() => [
  { title: 'Subtotal', amount: subtotal.value.toFixed(2) },
  { title: 'Shipping', amount: shipping.value.toFixed(2) },
  { title: 'Total', amount: total.value.toFixed(2) }
])
</script>

<style lang="scss">
@import "@/assets/styles/components/cart/PaymentSection.scss";
</style>