<template>
  <div class="main">
    <div class="header">
      <h1>Shopping Cart</h1>
      <button
        type="button"
        class="header__close"
        aria-label="Close shopping cart"
        @click="$emit('close')"
      >
        <i class="fa-regular fa-circle-xmark" aria-hidden="true"></i>
      </button>
    </div>
    <div class="cart-content">
      <div class="cart-content__inner">
        <div class="cart-items">
          <CartCard v-for="product in cartProducts" :key="product.id" :product="product" />
        </div>
          <PaymentSection />
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
      return this.$store.getters.cartProducts;
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
}

.header {
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

.header h1 {
  color: #fff;
  font-size: 25px;
  margin: 0;
}

.header__close {
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

.header__close:hover {
  transform: scale(1.2);
}

.header__close:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
  border-radius: 4px;
}

.cart-content {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}

.cart-content__inner {
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 16px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
