<template>
  <div class="main">
    <div class="header">
        <HeaderColor>
          <span slot="small">Categories</span>
          <span slot="big">Browse By Category</span>
        </HeaderColor>
    </div>
    <div class="category-grid" >
        <div class="grid-box" v-for="(category, index) in categories" :key="category.slug">
            <div class="icon">
                <i :class="categoryIcons[index].i"></i>
            </div>
            <p>{{ category.name }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderColor from '@/layout/shared/HeaderColor.vue';

export default {   
  name: 'CategorySection',
  components: {
    HeaderColor
  },
  data() {
    return {
        categoryIcons: [
            {i: 'fa-solid fa-spa'},
            {i: 'fa-solid fa-spray-can-sparkles'},
            {i: 'fa-solid fa-chair'},
            {i: 'fa-solid fa-shopping-bag'},
            {i: 'fa-solid fa-paint-roller'},
            {i: 'fa-solid fa-blender'},
            {i: 'fa-solid fa-laptop'},
            {i: 'fa-solid fa-shirt'},
        ]
    }
  }, 
  computed: {
    categories() {
        return this.$store.state.categories
    }
  },
  mounted() {
    this.$store.dispatch('fetchCategories')
  },   
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: solid #ccc 1px;
}

.category-grid{
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 30px;
  align-items: center;
  padding: 0 0 40px;
}

.grid-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  border: solid #ccc 1px;
  transition: all 0.5s ease; 
}

.grid-box:hover {
  background-color: #db4444;
  color: #fff;
  border: solid #db4444 1px;
  transform: translateY(-10px);
}

.icon i {
  font-size: 40px;
  padding: 15px ; 
}
</style>