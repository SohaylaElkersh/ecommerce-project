<!-- Every product returned from the dummy json has a discount percentage,
 so i just fetched a sliced array of products by fetchProducts action-->

<template>
    <div class="flash-sales">
        <div class="flash-sales__header">
            <HeaderColor>
              <span slot="small">Today's</span>
              <span slot="big">Flash Sales</span>
            </HeaderColor>
        </div>
        <ProductGrid>
          <template v-if="loading">
            <ProductCardSkeleton v-for="n in 4" :key="n" />
          </template>
          <template v-else>
            <ProductCard v-for="product in products" :key="product.id" :product="product"/>
          </template>
        </ProductGrid>
        <BaseButton class="flash-sales__button" to="/explore">View All Products</BaseButton>
    </div>
</template>

<script>
import HeaderColor from '@/components/UI/HeaderColor.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton.vue';

export default {
    name: 'FlashSales',
    components: {
      ProductCardSkeleton,
        HeaderColor,
        ProductCard,
        ProductGrid,
        BaseButton
    },
    computed: {
      products() {
        return this.$store.getters['products/randomProducts'];
      },
      loading() {
        return this.$store.state.products.isLoading; 
      }      
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/home/FlashSales.scss";
</style>