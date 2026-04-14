<!-- Every product returned from the dummy json has a discount percentage,
 so i just fetched a sliced array of products by fetchProducts action-->

<template>
    <div class="main">
        <div class="header">
            <HeaderColor>
              <span slot="small">Today's</span>
              <span slot="big">Flash Sales</span>
            </HeaderColor>
        </div>
        <ProductGrid>
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
        </ProductGrid>
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
import ProductGrid from '../products/ProductGrid.vue';

export default {
    name: 'FlashSales',
    components: {
        HeaderColor,
        ProductCard,
        ProductGrid
    },
    computed: {
      products() {
        return this.$store.state.products.slice(0,4);
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
  border-bottom: solid #ccc 1px;
  padding-bottom: 40px;
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