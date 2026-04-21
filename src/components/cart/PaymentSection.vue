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

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseInput from '@/components/UI//BaseInput.vue';
import { useCartStore } from '@/store/cart'

export default {
  name: 'PaymentSection',
  components: {
    BaseButton,
    BaseInput
  },
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },  
  computed: {  
    subtotal() {
      return this.cartStore.cartTotal;
    },
    shipping() {
      return this.subtotal * 0.1;       //shipping is 1% of the subtotal
    },
    total() {
      return this.subtotal + this.shipping;
    },
    money() {
      return [
        { title: 'Subtotal', amount: this.subtotal.toFixed(2) },
        { title: 'Shipping', amount: this.shipping.toFixed(2) },
        { title: 'Total', amount: this.total.toFixed(2) }
      ];
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/components/cart/PaymentSection.scss";
</style>