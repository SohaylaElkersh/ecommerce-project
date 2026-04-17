<template>
    <div class="cart-card-wrapper">
        <div class="cart-card">
            <div class="cart-card__remove" @click="removeFromCart">
              <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <img class="cart-card__image" :src="product.thumbnail" :alt="product.title" />
            <p class="cart-card__title">{{ product.title }}</p>
            <QuantityControl  class="cart-card__quantity" :modelValue="product.quantity" 
              @increment="incrementQuantity"  
              @decrement="decrementQuantity"/>
            <p class="cart-card__price">${{ product.price }}</p>
        </div>
    </div>
</template>

<script>
import QuantityControl from '../UI/QuantityControl.vue';

export default {
  name: "CartCard",
  components: {
    QuantityControl
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    incrementQuantity() {
      this.$store.dispatch('cart/updateCartQuantity', 
      {productId: this.product.id, quantity: this.product.quantity + 1});
    },
    decrementQuantity() {
      if (this.product.quantity > 1) {
        this.$store.dispatch('cart/updateCartQuantity', 
        {productId: this.product.id, quantity: this.product.quantity - 1});
      }
    },
    removeFromCart() {
      this.$store.dispatch('cart/removeFromCart', this.product.id);
    }
  }
}
</script>

<style scoped>
.cart-card-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    max-width: 550px;
    width: 100%;
    margin: 5px auto 5px;
    box-sizing: border-box;
}

.cart-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 15px 0px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;
    cursor: pointer;
    width: 500px;
    max-width: 100%;
    box-sizing: border-box;
}

.cart-card:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
  background-color: #f5f5f5;
}

.cart-card__remove,
.cart-card__image,
.cart-card__quantity,
.cart-card__price {
  flex-shrink: 0;
}

.cart-card__remove {
    color: #db4444;
    font-size: 20px;
    transition: all 0.5s ease;
    cursor: pointer;
}

.cart-card:hover .cart-card__remove:hover {
    transform: scale(1.1);
    color: #c03939;
}

.cart-card__image {
    width: 70px;
    height: auto;
    aspect-ratio: 1 / 1;
}

.cart-card__title {
  flex: 0.8;                 
  min-width: 0;           
  white-space: nowrap;     
  overflow: hidden;        
  text-overflow: ellipsis; 
  font-size: 14px;
}
</style>