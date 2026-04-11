<template>
    <div class="main">
        <div class="header">
            <HeaderColor>
              <span slot="small">Our Products</span>
              <span slot="big">Explore Our Products</span>
            </HeaderColor>
        </div>
        <div class="cards">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div class="btn">
            <router-link to="/explore">
              View All Products
            </router-link>
        </div>
    </div>
</template>

<script>
import HeaderColor from '@/layout/shared/HeaderColor.vue';
import ProductCard from '../products/ProductCard.vue';

export default {
    name: 'ExploreSection',
    components: {
        HeaderColor,
        ProductCard
    },
    computed: {
      products() {
        return this.$store.state.products.slice(0,8);
      },
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
    }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 50px;
}

.btn {
  margin: 50px auto 0;
}

.btn a {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  background-color: #db4444;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.5s ease;
}

.btn a:hover {
    background-color: #c03939;
    transform: translateY(-10px);
}
</style>