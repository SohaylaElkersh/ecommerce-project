<template>
  <div class="home-page__wrapper">
    <CarouselSection/>
    <FlashSales/>
    <CategorySectionSkeleton v-if="loading" />
    <CategorySection v-else />
    <ExploreSection/>
    <QualitySection/>
  </div>
</template>

<script setup>
import CarouselSection from '@/components/home/CarouselSection.vue';
import FlashSales from '@/components/home/FlashSales.vue';
import CategorySection from '@/components/home/CategorySection.vue';
import ExploreSection from '@/components/home/ExploreSection.vue'
import QualitySection from '@/components/sections/QualitySection.vue';
import CategorySectionSkeleton from '@/components/home/CategorySectionSkeleton.vue';
import { useProductsStore } from '@/store/products.js';
import { computed, onMounted } from 'vue';

const productsStore = useProductsStore()

onMounted(() => {
  productsStore.fetchProducts({ reset: true });
})

const loading = computed (() => {
  return productsStore.isLoading
})
</script>

<style lang="scss">
@import "@/assets/styles/pages/HomePage.scss"
</style>