<template>
    <div class="explore-section">
        <div class="explore-section__header">
          <HeaderColor>
            <template #small>Our Products</template>
            <template #big>Explore Our Products</template>
          </HeaderColor>            
        </div>
        <ProductGrid>
          <template v-if="loading">
            <ProductCardSkeleton v-for="n in 8" :key="n" />
          </template>
          <template v-else>
            <ProductCard v-for="product in products" :key="product.id" :product="product"/>
          </template>
        </ProductGrid>
        <BaseButton class="explore-section__button" to="/explore">View All Products</BaseButton>
    </div>
</template>

<script>
import HeaderColor from '@/components/UI/HeaderColor.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton.vue';
import { useProductsStore } from '@/store/products';

export default {
  name: 'ExploreSection',
  components: {
      ProductCardSkeleton,
      HeaderColor,
      ProductCard,
      ProductGrid,
      BaseButton
  },
  setup() {
    const productsStore = useProductsStore()
    return { productsStore }
  },      
  computed: {
    products() {
      return this.productsStore.products.slice(0,8);
    },
    loading() {
      return this.productsStore.isLoading; 
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/components/home/ExploreSection.scss";
</style>