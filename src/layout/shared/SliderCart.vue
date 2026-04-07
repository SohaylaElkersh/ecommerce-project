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
          <ProductCartCard
            v-for="product in cartProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="payment">
          <div class="amount">
            <p>Subtotal:</p>
            <p>$123</p>
          </div>
          <div class="amount">
            <p>Shipping:</p>
            <p>$12</p>
          </div>
          <div class="amount">
            <p>Total:</p>
            <p>$1234</p>
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
          <input type="text" placeholder="Coupon Code" />
          <button type="button">Apply</button>
        </div>
        <div class="btn">
          <button type="button">Place Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCartCard from '@/components/products/ProductCartCard.vue'
import allProducts from '@/models/products'

const STATIC_CART_ITEM_COUNT = 0      // =======>>>>> to control cart item number

export default {
  name: 'SliderCart',
  components: {
    ProductCartCard,
  },
  computed: {
    cartProducts() {
      return allProducts.slice(0, STATIC_CART_ITEM_COUNT)
    },
  },
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

.payment {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
}

.amount {
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
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  margin: 25px 0;
}

.coupon input {
  height: 35px;
  border-radius: 4px;
  border: none;
  width: 350px;
  max-width: calc(100% - 140px);
  min-width: 0;
  font-size: 14px;
  background-color: #f5f5f5;
  padding-left: 15px;
  box-sizing: border-box;
}

.coupon button {
  padding: 10px 40px;
  border-radius: 4px;
  color: #fff;
  background-color: #db4444;
  transition: all 0.5s ease;
  border: none;
  margin-left: 20px;
  flex-shrink: 0;
}

.coupon button:hover {
  transform: translateY(-5px);
  background-color: #c03939;
}

.btn {
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
}

.btn button {
  padding: 15px 25px;
  border-radius: 4px;
  color: #fff;
  background-color: #db4444;
  transition: all 0.5s ease;
  border: none;
  width: 200px;
  font-size: 16px;
}

.btn button:hover {
  transform: translateY(-5px);
  background-color: #c03939;
}
</style>
