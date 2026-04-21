<template>
  <div v-if="product" class="product-card">
    <div class="product-card__image-wrapper">
      <img class="product-card__image" :src="product && product.thumbnail ? product.thumbnail : undefined" :alt="product && product.title ? product.title : ''"/>
      <div class="product-card__discount">-{{ discountPercentage }}%</div>
      <div class="product-card__actions">
        <router-link class="product-card__action" :to="product && product.id ? `/product/${product.id}` : undefined">
          <i class="fa-regular fa-eye"></i>
        </router-link>
        <i class="fa-regular fa-heart product-card__action"></i>
      </div>
      <div class="product-card__cart" @click="addToCart">Add to Cart</div>
    </div>
    <div class="product-card__info">
      <h4 class="product-card__title">{{ product && product.title }}</h4>
      <div class="product-card__pricing">
        <p class="product-card__price-original">${{ product && product.price ? product.price.toFixed(2) : '0.00' }}</p>
        <p class="product-card__price-discount">${{ discountedPrice }}</p>
        <div class="product-card__rating">
          <p class="product-card__stars">{{ product && product.rating ? star(product.rating) : '' }}</p>
          <p class="product-card__reviews">({{ product && product.reviews.length ? product.reviews.length : 0 }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from "@/filters/ratingStar.js"; 
import { getDiscountPercentage, getDiscountedPriceFromProduct } from "@/utils/pricing";
import { useProductsStore } from '@/store/products';
import { useCartStore } from '@/store/cart';

export default {
  name: "ProductCard",
  props: ["product"],
  setup() {
    const productsStore = useProductsStore()
    const cartStore = useCartStore()
    return { productsStore, cartStore }
  },  
  methods: {
    star,
    addToCart() {
      this.cartStore.addToCart(this.product);
    },
  },
  computed: {
    discountPercentage() {
      if (!this.product) return 0;
      return getDiscountPercentage(this.product);
    },
    discountedPrice() {
      if (!this.product || !this.product.price) return '0.00';
      return getDiscountedPriceFromProduct(this.product).toFixed(2);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/components/products/ProductCard.scss";
</style>

