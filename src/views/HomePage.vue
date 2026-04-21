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

<script>
import CarouselSection from '@/components/home/CarouselSection.vue';
import FlashSales from '@/components/home/FlashSales.vue';
import CategorySection from '@/components/home/CategorySection.vue';
import ExploreSection from '@/components/home/ExploreSection.vue'
import QualitySection from '@/components/sections/QualitySection.vue';
import CategorySectionSkeleton from '@/components/home/CategorySectionSkeleton.vue';
import { useProductsStore } from '@/store/modules/products';

export default {
  name: 'HomePage',
  components: {
    CarouselSection,
    FlashSales,
    CategorySection,
    ExploreSection,
    QualitySection,
    CategorySectionSkeleton
  },
  setup() {
    const productsStore = useProductsStore()
    return { productsStore }
  },  
  mounted() {
    this.productsStore.fetchProducts({ reset: true });
  },
  computed: {
    loading() {
      return this.productsStore.isLoading
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/pages/HomePage.scss"
</style>