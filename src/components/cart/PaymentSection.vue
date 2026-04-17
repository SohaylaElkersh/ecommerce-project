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

export default {
  name: 'PaymentSection',
  components: {
    BaseButton,
    BaseInput
  },
  computed: {
    subtotal() {
      return this.$store.getters['cart/cartTotal'];
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

<style scoped>
.payment-section__summary {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
}

.payment-section__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #ccc solid 2px;
  width: 100%;
  gap: 15px;
}

.payment-section__methods {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.payment-section__method label {
  margin-left: 10px;
}

.payment-section__method input {
  accent-color: #000;
}

.payment-section__coupon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  margin: 25px 0;
}

.payment-section__coupon-input {
  max-width: calc(100% - 110px);
}

.payment-section__order-button {
  width: fit-content;
  align-self: center;
}
</style>