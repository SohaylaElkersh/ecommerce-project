<template>
  <div v-if="product" class="product-card">
    <div class="product-card__image-wrapper">
      <img class="product-card__image" :src="product.thumbnail" :alt="product.title || ''"/>
      <div class="product-card__discount">-{{ discountPercentage }}%</div>
      <div class="product-card__actions">
        <router-link class="product-card__action" :to="`/product/${product.id}`">
          <i class="fa-regular fa-eye"></i>
        </router-link>
        <i class="fa-regular fa-heart product-card__action"></i>
      </div>
      <div class="product-card__cart" @click="addToCart">Add to Cart</div>
    </div>
    <div class="product-card__info">
      <h4 class="product-card__title">{{ product.title }}</h4>
      <div class="product-card__pricing">
        <p class="product-card__price-original">${{ product.price?.toFixed(2) || '0.00' }}</p>
        <p class="product-card__price-discount">${{ discountedPrice }}</p>
        <div class="product-card__rating">
          <p class="product-card__stars">{{ product.rating ? star(product.rating) : '' }}</p>
          <p class="product-card__reviews">({{ product.reviews?.length || 0 }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import star from "@/filters/ratingStar.js"; 
import { getDiscountPercentage, getDiscountedPriceFromProduct } from "@/utils/pricing";
import { useCartStore } from '@/store/cart';
import { computed } from "vue"

const props = defineProps({
  product: Object
})

const cartStore = useCartStore()

function addToCart() {
  cartStore.addToCart(props.product)
}

const discountPercentage = computed(() => {
  if (!props.product) return 0
  return getDiscountPercentage(props.product)
})

const discountedPrice = computed(() => {    
  if (!props.product || !props.product.price) return '0.00';
  return getDiscountedPriceFromProduct(props.product).toFixed(2);
})
</script>

<style lang="scss">
@import "@/assets/styles/components/products/ProductCard.scss";
</style>

