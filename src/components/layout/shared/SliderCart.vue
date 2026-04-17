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

<script>
import CartCard from '@/components/cart/CartCard.vue'
import PaymentSection from '@/components/cart/PaymentSection.vue';

export default {
  name: 'SliderCart',
  components: {
    CartCard,
    PaymentSection
  },
  computed: {
    cartProducts() {
      return this.$store.getters['cart/cartProducts'];
    }
  }
}
</script>

<style scoped>
.cart-drawer {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
}

.cart-drawer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background-color: #db4444;
  margin-bottom: 10px;
  padding: 0 20px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  width: 100%;
  box-sizing: border-box;
  height: 75px;
}

.cart-drawer__title {
  color: #fff;
  font-size: 25px;
  margin: 0;
}

.cart-drawer__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 0;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 25px;
  line-height: 1;
  cursor: pointer;
  transition: all 0.5s ease;
}

.cart-drawer__close:hover {
  transform: scale(1.2);
}

.cart-drawer__close:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
  border-radius: 4px;
}

.cart-drawer__content {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}

.cart-drawer__inner {
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 16px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-drawer__items {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-drawer__payment-section {
  width: 500px;
  max-width: 100%;
  box-sizing: border-box;  
  padding: 10px;
}

.cart-drawer__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 20px;
  text-align: center;
  margin: auto;
}

.cart-drawer__empty-title {
  color: #000;
  margin: auto;
}
</style>
