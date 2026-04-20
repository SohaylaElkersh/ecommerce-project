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
  mounted() {
    this.$store.dispatch('products/fetchProducts', {reset: true});
  },
  computed: {
    loading() {
      return this.$store.state.products.isLoading
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/pages/HomePage.scss"
</style>