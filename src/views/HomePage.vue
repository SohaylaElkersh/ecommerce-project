<template>
  <div class="main-home">
    <FlashSales/>
    <CategorySection/>
    <ExploreSection/>
    <QualitySection/>
  </div>
</template>

<script>
import CategorySection from '@/components/home/CategorySection.vue';
import FlashSales from '@/components/home/FlashSales.vue';
import ExploreSection from '@/components/home/ExploreSection.vue'
import QualitySection from '@/layout/shared/QualitySection.vue';

export default {
  name: 'HomePage',
  components: {
    CategorySection,
    FlashSales,
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
  padding: 50px 75px;
  gap: 100px;
}
</style>