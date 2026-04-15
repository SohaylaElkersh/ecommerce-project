<template>
    <div class="main">
        <div class="payment">
          <div class="money" v-for="(amount, index) in money" :key="index">
            <p>{{ amount.title }}:</p>
            <p>${{ amount.amount }}</p>
          </div>
          <div class="payment-method">
            <h4>Payment Method:</h4>
            <div class="method">
              <input type="radio" id="bank" name="method" />
              <label for="bank">Bank</label>
            </div>
            <div class="method">
              <input type="radio" id="cash" name="method" />
              <label for="cash">Cash on delivery</label>
            </div>
          </div>
        </div>
        <div class="coupon">
          <BaseInput class="coupon-input" type="text" placeholder="Coupon Code"/>
          <BaseButton>Apply</BaseButton>
        </div>
        <BaseButton class="order-btn">Place Order</BaseButton>
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
.payment {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
}

.money {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #ccc solid 2px;
  width: 100%;
  gap: 15px;
}

.payment-method {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.method label {
  margin-left: 10px;
}

.method input {
  accent-color: #000;
}

.coupon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  margin: 25px 0;
}

.coupon-input {
  max-width: calc(100% - 110px);
}

.order-btn {
  width: fit-content;
  align-self: center;
}
</style>