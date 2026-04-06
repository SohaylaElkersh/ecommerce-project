<template>
    <div class="main">
        <div class="header">
            <h1>Explore Our Products</h1>
            <div class="sorting">
                <span>Sort By</span>
                <select>
                    <option value="rating">Highest Rating</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="discount">Discount Percentage</option>
                    <option value="brand">Brand</option>
                    <option value="category">Category</option>
                </select>
            </div>
        </div>
        <div class="products">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div class="btn">
            <a href="">Load More...</a>
        </div>
    </div>
</template>

<script>   
import products from '../models/products.js';
import ProductCard from '../components/products/ProductCard.vue';

export default {
    name: 'ExploreProducts',
    components: {
        ProductCard
    },
    data() {
        return {
            products
        };
    }
}
</script>

<style scoped>
.main {
  padding: 10px 60px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.sorting {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 20px;
}

.sorting span {
  font-size: 18px;
  margin-right: 7px;
}

.sorting select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 200px;
}

.sorting select:focus {
  border-color: #868686;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 50px;
  padding: 20px;
}

.btn {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
.btn a {
  padding: 10px 20px;
  background-color: #db4444;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.5s ease;
}

.btn a:hover {
  background-color: #c03939;
  transform: translateY(-5px);
}
</style>