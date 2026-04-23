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

<script setup>
import QuantityControl from '@/components/UI/QuantityControl.vue';
import { useCartStore } from '@/store/cart'

// Receives an object as a prop (product) from parent.
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
const cartStore = useCartStore()

// Increases product quantity via cart store update.
function incrementQuantity() {
  cartStore.updateCartQuantity({ productId: props.product.id, quantity: props.quantity + 1 })
}

// Decreases product quantity (minimum enforced at 1).
function decrementQuantity() {
  if (props.product.quantity > 1) {
  cartStore.updateCartQuantity({ productId: props.product.id, quantity: props.quantity - 1 })
  }
}

// Removes product entirely from cart store.
function removeFromCart() {
  cartStore.removeFromCart(props.product.id)
}
</script>

<style lang="scss">
@import "@/assets/styles/components/cart/CartCard.scss"
</style>



//  Component Purpose:
//  Represents a single product item inside the shopping cart UI.
//  Allows users to view product details and modify or remove the item.