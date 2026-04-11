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
            <button @click="loadMore" :disabled="products.length >= total">Load More...</button>
        </div>
    </div>
</template>

<script>   
import ProductCard from '../components/products/ProductCard.vue';

export default {
    name: 'ExploreProducts',
    components: {
        ProductCard
    },
    computed: {
      products() {
        return this.$store.state.products 
      },
      total() {
        return this.$store.state.total
      }
    },
    methods: {
      loadMore() {
        this.$store.dispatch('fetchProducts');
      }
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
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
}

.btn {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
.btn button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #db4444;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  transition: all 0.5s ease;
  cursor: pointer;
}

.btn button:hover {
  background-color: #c03939;
  transform: translateY(-5px);
}

.btn button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
</style>