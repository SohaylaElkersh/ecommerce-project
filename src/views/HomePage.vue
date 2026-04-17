<template>
  <div class="home-page__wrapper">
    <CarouselSection/>
    <FlashSales/>
    <CategorySection/>
    <ExploreSection/>
    <QualitySection/>
  </div>
</template>

<script>
import CarouselSection from '@/components/home/CarouselSection.vue';
import FlashSales from '@/components/home/FlashSales.vue';
import CategorySection from '@/components/home/CategorySection.vue';
import ExploreSection from '@/components/home/ExploreSection.vue'
import QualitySection from '@/components/layout/shared/QualitySection.vue';

export default {
  name: 'HomePage',
  components: {
    CarouselSection,
    FlashSales,
    CategorySection,
    ExploreSection,
    QualitySection
  },
  mounted() {
    this.$store.dispatch('products/fetchProducts', {reset: true});
  }
}
</script>

<style scoped>
.home-page__wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0px 75px;
  gap: 100px;
}
</style>