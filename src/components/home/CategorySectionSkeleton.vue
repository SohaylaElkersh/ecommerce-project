<template>
  <div class="category-section category-section--skeleton">
    <div class="category-section__header">
      <HeaderColor>
        <span slot="small">Categories</span>
        <span slot="big">Browse By Category</span>
      </HeaderColor>
    </div>

    <div class="category-section__grid">
      <div
        class="category-section__item"
        v-for="n in 8"
        :key="n"
      >
        <div class="category-section__icon">
          <div class="skeleton skeleton-icon"></div>
        </div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderColor from '@/components/UI/HeaderColor.vue';

export default {
  name: "CategorySectionSkeleton",
  components: {
    HeaderColor
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/components/home/CategorySection.scss';
@import '@/assets/styles/components/home/CategorySectionSkeleton.scss';
</style>