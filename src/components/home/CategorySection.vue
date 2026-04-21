<template>
  <div class="category-section">
    <div class="category-section__header">
      <HeaderColor>
        <template #small>Categories</template>
        <template #big>Browse By Category</template>
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
import { useProductsStore } from '@/store/products';

export default {   
  name: 'CategorySection',
  components: {
    HeaderColor
  },
  setup() {
    const productsStore = useProductsStore()
    return { productsStore }
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
      return this.productsStore.categories
    }
  },
  mounted() {
    this.productsStore.fetchCategories()
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