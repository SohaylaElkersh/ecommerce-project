<template>
  <div class="card">
    <div class="image-container">
      <img :src="product.thumbnail" :alt="product.name" />
      <div class="discount">-{{ Math.ceil(product.discountPercentage) }}%</div>
      <div class="icons">
        <router-link :to="`/product/${product.id}`">
          <i class="fa-regular fa-eye"></i>
        </router-link>
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="add-to-cart" @click="addToCart">Add to Cart</div>
    </div>
    <div class="info">
      <h4>{{ product.title }}</h4>
      <div>
        <p class="price">${{ product.price }}</p>
        <div class="rating">
          <p class="stars">{{ star(product.rating) }}</p>
          <p class="total-ratings">({{ product.reviews.length }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from "@/filters/ratingStar.js"; 

export default {
  name: "ProductCard",
  props: ["product"],
  methods: {
    star,
    addToCart() {
      this.$store.commit('addToCart', this.product);
    }
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}

.card:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
}

.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; 
  overflow: hidden;
  border-radius: 4px;
  background: #f5f5f5;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.discount {
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #db4444;
  color: #fff;
  font-size: small;
}

.icons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icons i {
  background: #fff;
  padding: 8px;
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.icons i:hover {
  transform: scale(1.2);
}

.icons a {
  color: #000;
}

.add-to-cart {
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

.image-container:hover .add-to-cart {
  opacity: 1;
  transform: translateY(0);
}

.info {
  margin-top: 10px;
}

.info h4 {
  font-size: 16px;
  margin-bottom: 1px;
}

.info div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.price {
  color: #db4444;
}

.rating {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.stars {
  font-size: x-large;
  color: rgb(244, 192, 60);
  padding-bottom: 5px;
}

.total-ratings {
  font-size: 16px;
  color: #868686;
}
</style>