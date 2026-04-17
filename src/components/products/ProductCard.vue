<template>
  <div class="product-card">
    <div class="product-card__image-wrapper">
      <img class="product-card__image" :src="product.thumbnail" :alt="product.name"/>
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
        <p class="product-card__price-original">${{ product.price.toFixed(2) }}</p>
        <p class="product-card__price-discount">${{ discountedPrice }}</p>
        <div class="product-card__rating">
          <p class="product-card__stars">{{ star(product.rating) }}</p>
          <p class="product-card__reviews">({{ product.reviews.length }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from "@/filters/ratingStar.js"; 
import { getDiscountPercentage, getDiscountedPriceFromProduct } from "@/utils/pricing";

export default {
  name: "ProductCard",
  props: ["product"],
  methods: {
    star,
    addToCart() {
      this.$store.dispatch('cart/addToCart', this.product);
    },
  },
  computed: {
    productDetailsRoute() {
      const fromExplore = this.$route.path.startsWith('/explore');

      return {
        path: `/product/${this.product.id}`,
        query: {
          breadcrumb: 'Explore',
          breadcrumbTo: fromExplore ? this.$route.path : '/explore'
        }
      };
    },
    discountPercentage() {
      if (!this.product) return 0;
      return getDiscountPercentage(this.product);
    },
    discountedPrice() {
      if (!this.product) return 0;
      return getDiscountedPriceFromProduct(this.product).toFixed(2);
    }
  }
};
</script>

<style scoped>
.product-card {
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}

.product-card:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
}

.product-card__image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; 
  overflow: hidden;
  border-radius: 4px;
  background: #f5f5f5;
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.product-card__discount {
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #db4444;
  color: #fff;
  font-size: small;
}

.product-card__actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-card__action {
  background: #fff;
  padding: 8px;
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s ease;
  color: #000;
}

.product-card__action:hover {
  transform: scale(1.2);
}

.product-card__cart {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #000;
  color: #fff;
  text-align: center;
  padding: 10px;

  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
}

.product-card__image-wrapper:hover .product-card__cart {
  opacity: 1;
  transform: translateY(0);
}

.product-card__info {
  margin-top: 10px;
}

.product-card__title {
  font-size: 16px;
  margin-bottom: 1px;
}

.product-card__pricing {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.product-card__price-original {
  color: gray;
  text-decoration: line-through;
}

.product-card__price-discount {
  color: #db4444;
}

.product-card__rating {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.product-card__stars {
  font-size: x-large;
  color: rgb(244, 192, 60);
  padding-bottom: 5px;
}

.product-card__reviews {
  font-size: 16px;
  color: #868686;
}
</style>