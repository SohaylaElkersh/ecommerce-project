<template>
  <div class="product-detail">
    <div class="product-detail__gallery">
      <div class="product-detail__thumbs" v-if="product && product.images">
        <img v-for="img in product.images" :key="img" :src="img" :alt="product.title"/>
      </div>
      <div class="product-detail__main-image">
        <img :src="product.thumbnail" :alt="product.title" />
      </div>
      <div class="product-detail__content">
        <div class="product-detail__info">
          <h2 class="product-detail__title">{{ product.title }}</h2>
          <p class="product-detail__category">Category: <router-link to="">{{ product.category }}</router-link></p>
          <div class="product-detail__rating">
            <p class="product-detail__stars">{{ star(product.rating) }}</p>
            <p class="product-detail__reviews">({{ product.reviews.length }} Reviews)</p>
            <p>|</p>
            <p class="product-detail__stock" :class="{
                'product-detail__stock--in': product.stock > 0,
                'product-detail__stock--out': product.stock === 0
              }">
              {{ product.stock > 0 ? "In Stock" : "Out of Stock" }}
            </p>
          </div>
          <div class="product-detail__pricing">
            <p class="product-detail__price-original">${{ product.price.toFixed(2) }}</p>
            <p class="product-detail__price-discount">${{ discountedPrice }}</p>
          </div>
          <p class="product-detail__description">{{ product.description }}</p>
        </div>
        <div class="product-detail__actions">
          <QuantityControl class="product-detail__quantity" :modelValue="quantity" @increment="incrementQuantity" @decrement="decrementQuantity"/>
          <div>
            <BaseButton @click="addToCart">Add to Cart</BaseButton>
            <button class="product-detail__wishlist"><i class="fa-regular fa-heart"></i></button>
          </div>
        </div>
        <div class="product-detail__delivery">
          <div class="product-detail__delivery-item">
            <div class="product-detail__delivery-icon"><i class="fa-solid fa-truck-fast"></i></div>
            <div class="product-detail__delivery-content">
              <h5>Free Delivery</h5>
              <router-link to="">Enter your postal code for delivery availability</router-link>
            </div>
          </div>
          <div class="product-detail__delivery-item">
            <div class="product-detail__delivery-icon"><i class="fa-solid fa-rotate-left"></i></div>
            <div class="product-detail__delivery-content">
              <h5>Delivery Return</h5>
              <router-link to="">Free 30 days delivery returns. Details</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import star from '@/filters/ratingStar.js';
import QuantityControl from '../UI/QuantityControl.vue';
import { getDiscountedPriceFromProduct } from '@/utils/pricing';
import { useCartStore } from '@/store/cart.js';
import { computed, ref } from 'vue';

const cartStore = useCartStore()
const quantity = ref(1)

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const discountedPrice = computed(() => {
  if (!props.product) return 0;
  return getDiscountedPriceFromProduct(props.product).toFixed(2);
})

function addToCart() {
  cartStore.addToCart({ ...props.product, quantity: quantity.value });
}

function incrementQuantity() {
  quantity.value++;
}

function decrementQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/components/products/ProductInfo.scss";
</style>