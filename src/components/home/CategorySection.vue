<template>
  <div class="category-section">
    <div class="category-section__header">
        <HeaderColor>
          <span slot="small">Categories</span>
          <span slot="big">Browse By Category</span>
        </HeaderColor>
    </div>
    <div class="category-section__grid" >
        <div class="category-section__item" v-for="(category, index) in categories" :key="category.slug" @click="selectedCategory(category.slug)">
            <div class="category-section__icon">
                <i :class="categoryIcons[index].icon"></i>
            </div>
            <p>{{ category.name }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderColor from '@/components/UI/HeaderColor.vue';

export default {   
  name: 'CategorySection',
  components: {
    HeaderColor
  },
  data() {
    return {
        categoryIcons: [
            {icon: 'fa-solid fa-spa'},
            {icon: 'fa-solid fa-spray-can-sparkles'},
            {icon: 'fa-solid fa-chair'},
            {icon: 'fa-solid fa-shopping-bag'},
            {icon: 'fa-solid fa-paint-roller'},
            {icon: 'fa-solid fa-blender'},
            {icon: 'fa-solid fa-laptop'},
            {icon: 'fa-solid fa-shirt'},
        ]
    }
  }, 
  computed: {
    categories() {
        return this.$store.state.products.categories
    }
  },
  mounted() {
    this.$store.dispatch('products/fetchCategories')
  },   
  methods: {
    selectedCategory(categorySlug) {
      this.$router.push(`/explore/${categorySlug}`);
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/components/home/CategorySection.scss";
</style>