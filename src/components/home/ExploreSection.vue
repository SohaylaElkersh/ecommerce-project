<template>
    <div class="main">
        <div class="header">
            <HeaderColor>
              <span slot="small">Our Products</span>
              <span slot="big">Explore Our Products</span>
            </HeaderColor>
        </div>
        <ProductGrid>
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
        </ProductGrid>
        <BaseButton class="btn" to="/explore">View All Products</BaseButton>
    </div>
</template>

<script>
import HeaderColor from '@/components/UI/HeaderColor.vue';
import ProductCard from '../products/ProductCard.vue';
import ProductGrid from '../products/ProductGrid.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
    name: 'ExploreSection',
    components: {
        HeaderColor,
        ProductCard,
        ProductGrid,
        BaseButton
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

.btn {
  margin: 50px;
  align-self: center;
}
</style>