<template>
  <div class="main-home">
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
  }
}
</script>

<style scoped>
.main-home {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  padding: 0px 75px;
  gap: 100px;
}
</style>