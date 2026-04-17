<template>
    <div class="explore-section">
        <div class="explore-section__header">
            <HeaderColor>
              <span slot="small">Our Products</span>
              <span slot="big">Explore Our Products</span>
            </HeaderColor>
        </div>
        <ProductGrid>
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
        </ProductGrid>
        <BaseButton class="explore-section__button" to="/explore">View All Products</BaseButton>
    </div>
</template>

<script>
import HeaderColor from '@/components/UI/HeaderColor.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';
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
        return this.$store.state.products.products.slice(0,8);
      },
    }
}
</script>

<style scoped>
.explore-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.explore-section__button {
  margin: 50px;
  align-self: center;
}
</style>