<template>
    <div class="main">
        <div class="product-details">
            <div class="img-scroll">
                <img v-for="img in product.images" :key="img" :src="img" :alt="product.title" />
            </div>
            <div class="main-img">
                <img :src="product.thumbnail" :alt="product.title" />
            </div>
            <div class="details">
                <div class="product-info">
                    <h2>{{ product.title }}</h2>
                    <p class="category">Category: <router-link to="">{{ product.category }}</router-link></p>
                    <div class="rating">
                      <p class="stars">{{ star(product.rating) }}</p>
                      <p class="total-ratings">({{ product.reviews.length }} Reviews)</p>
                      <p style="color: #555;">|</p>
                      <p class="stock" :class="{ 'in-stock': product.stock > 0, 'out-stock': product.stock === 0 }">
                        {{ product.stock > 0 ? "In Stock" : "Out of Stock" }}
                      </p>
                    </div>
                    <p class="price">${{ product.price.toFixed(2) }}</p>
                    <p class="description">{{ product.description }}</p>
                </div>
                <div class="purchase-section">
                    <div class="quantity">
                        <div class="minus" @click="decrementQuantity"><i class="fa-solid fa-minus"></i></div>
                        <div class="quantity-input"><span>{{ quantity }}</span></div>
                        <div class="plus" @click="incrementQuantity"><i class="fa-solid fa-plus"></i></div>
                    </div>
                    <div>
                        <BaseButton @click="addToCart">Add to Cart</BaseButton>
                        <button class="love"><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
                <div class="delivery-section">
                    <div class="free">
                        <div class="icon"><i class="fa-solid fa-truck-fast"></i></div>
                        <div class="content">
                            <h5>Free Delivery</h5>
                            <router-link to="">Enter your postal code for delivery availability</router-link>
                        </div>
                    </div>
                    <div class="return">
                        <div class="icon"><i class="fa-solid fa-rotate-left"></i></div>
                        <div class="content">
                            <h5>Delivery Return</h5>
                            <router-link to="">Free 30 days delivery returns. Details</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
import star from '@/filters/ratingStar.js';

export default {
    name: 'ProductProps',
    components: {
      BaseButton
    },
    data() {
      return {
        quantity: 1
      }
    },
    computed: {
        product() {
          return this.$store.state.product
        },
        relatedProducts() {
          return this.$store.getters.relatedProducts;
        }
    },
  mounted() {
    const id = this.$route.params.id;
    this.$store.dispatch('fetchProduct', id)
      .catch(() => {
        this.$router.replace({ name: "NotFound" });
      });      
  },
  methods: {
      star,
      addToCart() {
        this.$store.commit('addToCart', this.product);
      },      
      incrementQuantity() {
          this.quantity++;
      },
      decrementQuantity() {
          if (this.quantity > 1) {
              this.quantity--;
          }
      }
  },
  watch: {
   '$route.params.id'(newId) {
     this.$store.dispatch('fetchProduct', newId)
       .catch(() => {
         this.$router.replace({ name: "NotFound" });
       });
   }
 } 
}
</script>

<style scoped>
.main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-details {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 50px;
  max-width: 1200px;
  width: 100%;      
}

.img-scroll {
  display: flex;
  flex-direction: column;
  gap: 33px;
  height: 600px;
  width: 100px;
}

.img-scroll img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  aspect-ratio: 1 / 1; 
  object-fit: cover;
}

.main-img {
  display: flex;
  flex-direction:column;
  justify-content: center;
  height: 500px;
  width: 500px;
}

.main-img img {
  width: 100%;
  max-width: 500px;
  height: 500px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: stretch;
  height: 500px;
  width: 500px;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: #555 solid 2px;
}

.product-info h2 {
  font-size: 24px;
  margin: 0;
}

.product-info .category {
  font-size: 15px;
  margin: 12px 0 0 0;
}

.product-info .category a {
  color: #000;
  font-weight: bold;
}

.product-info .rating {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product-info .rating .stars {
  font-size: x-large;
  color: rgb(244, 192, 60);
  margin: 0;
}

.product-info .rating .total-ratings {
  font-size: 14px;
  color: #555;
  margin: 0;
}

.product-info .rating .stock {
  font-size: 14px;
  margin: 0;
}

.product-info .rating .stock.in-stock {
  color: #66ffa3;
}

.product-info .rating .stock.out-stock {
  color: #db4444;
}

.product-info .price {
  font-size: 22px;
  font-weight: bold;
  margin: 0;
}

.product-info .description {
  font-size: 14px;
  margin-bottom: 20px;
  text-align: left;
  max-width: 50ch;
}

.purchase-section {
  display: flex;
  gap: 20px;
  align-items: center;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 0px;
}

.quantity .minus, .quantity .plus {
  width: 30px;
  height: 35px;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: all 0.5s ease;
}

.quantity .minus {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.quantity .plus {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.quantity .minus:hover, .quantity .plus:hover {
  background-color: #db4444;
  border: #db4444 solid 1px;
  color: #fff;
}

.quantity .quantity-input {
  width: 100px;
  height: 35px;
  text-align: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: none;
  border-right: none;
  font-weight: bold;
}

.quantity-input span {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 35px;
}

.love {
    padding: 7px 7px;
    margin-left: 20px;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: all 0.5s ease;
    font-size: large;
}

.love:hover {
    background-color: #ccc;
    border: #000 solid 1px;
}

.delivery-section {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.delivery-section .free, .delivery-section .return {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 10px 15px;
  border: 1px solid #ccc;
}

.delivery-section .free {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: none;
}

.delivery-section .return {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}

.delivery-section .icon {
  font-size: 25px;
}

.delivery-section .content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.delivery-section .content h5 {
  margin: 10px 0;
  font-size: 18px;
}

.delivery-section .content a , .delivery-section .content p {
  color: #000;
  font-size: smaller;
}
</style>