<!-- Every product returned from the dummy json has a discount percentage,
 so i just fetched a sliced array of products by fetchProducts action-->

<template>
    <div class="flash-sales">
        <div class="flash-sales__header">
          <HeaderColor>
            <template #small>Today's</template>
            <template #big>Flash Sales</template>
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

<script setup>
import HeaderColor from '@/components/UI/HeaderColor.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton.vue';
import { useProductsStore } from '@/store/products';
import { computed } from 'vue';

const productsStore = useProductsStore()
const products = computed(() => productsStore.randomProducts)
const loading = computed(() => productsStore.isLoading)
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/home/FlashSales.scss";
</style>