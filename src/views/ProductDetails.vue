<template>
    <div class="main">
        <div class="product-details">
            <div class="img-scroll">
                <img :src="product.image" :alt="product.name" />
                <img :src="product.image" :alt="product.name" />
                <img :src="product.image" :alt="product.name" />
                <img :src="product.image" :alt="product.name" />
            </div>
            <div class="main-img">
                <img :src="product.image" :alt="product.name" />
            </div>
            <div class="details">
                <div class="product-info">
                    <h2>{{ product.name }}</h2>
                    <p class="category">Category: <router-link to="">{{ product.category }}</router-link></p>
                    <div class="rating">
                      <p class="stars">{{ star(product.rating) }}</p>
                      <p class="total-ratings">({{ product.totalRatings }} Reviews)</p>
                      <p style="color: #555;">|</p>
                      <p class="stock" :class="{ 'in-stock': product.inStock, 'out-stock': !product.inStock }">
                        {{ product.inStock ? "In Stock" : "Out of Stock" }}
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
                        <button class="cart">Add to Cart</button>
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

        <div class="similar-products" v-if="relatedProducts.length > 0">
            <div class="header">
                <span class="header-color">L</span>
                <h4>More of this category</h4>               
            </div>
            <div class="products-list">
                <ProductCard v-for="prod in relatedProducts" :key="prod.id" :product="prod" />
            </div>
        </div>
    </div>
</template>

<script>
import products from '../models/products.js';
import star from '../utils/rating.js';
import ProductCard from '../components/products/ProductCard.vue';

export default {
    name: 'ProductDetails',
    components: {
        ProductCard
    },
    data() {
        return {
            products,
            product: null,
            quantity: 1
        };
    },
    computed: {
        relatedProducts() {
            return this.products.filter(p => p.category === this.product.category && p.id !== this.product.id).slice(0, 4);
        }
    },
    methods: {
        star,
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
        '$route.params.id': {
            handler(newId) {
                this.product = this.products.find(p => p.id == newId || p.id === +newId);
                if (!this.product) {
                    this.$router.replace({ name: "NotFound" });
                }
            },
            immediate: true
        }
    },
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
  width: 50ch;
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

.cart {
  padding: 10px 20px;
  background-color: #db4444;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
}

.buy:hover {
  background-color: #c03939;
  transform: translateY(-5px);
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

.similar-products {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
}

.similar-products .header-color {
  padding: 10px 4px;
  border-radius: 4px;
  background-color: #db4444;
  color: #db4444;
}

.similar-products .header h4 {
  font-size: 20px;
  margin: auto 0;
  color: #db4444;
}

.products-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.products-list ::v-deep .card {
  max-width: 280px;
  margin: 0;
}
</style>