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
import QuantityControl from '@/components/UI/QuantityControl.vue';
import { useCartStore } from '@/store/cart'

export default {
  name: "CartCard",
  components: {
    QuantityControl
  },
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
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
      this.cartStore.removeFromCart(this.product.id);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/components/cart/CartCard.scss"
</style>