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

<style scoped>
.category-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: solid #ccc 1px;
  padding: 0 10px;
}

.category-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  align-items: stretch;
  padding: 0 0 40px;
  width: 100%;
}

.category-section__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 15px 5px;
  text-align: center;
  min-height: 90px;
  gap: 10px;
}

.category-section__item:hover {
  background-color: #db4444;
  color: #fff;
  border: 1px solid #db4444;
  transform: translateY(-6px);
}

.category-section__icon i {
  font-size: 34px;
  margin-bottom: 8px;
  transition: transform 0.3s ease;
}

.category-section__item:hover .category-section__icon i {
  transform: scale(1.1);
}

.category-section__item p {
  font-size: 14px;
  margin: 0;
}

@media (max-width: 900px) {
  .category-section__grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 15px;
  }
}

@media (max-width: 600px) {
  .category-section__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .category-section__item {
    min-height: 100px;
    padding: 12px 8px;
  }

  .category-section__icon i {
    font-size: 28px;
  }
}
</style>