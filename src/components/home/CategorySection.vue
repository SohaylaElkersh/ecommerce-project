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

<script setup>
import HeaderColor from '@/components/UI/HeaderColor.vue';
import { useProductsStore } from '@/store/products';
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const productsStore = useProductsStore()
const router = useRouter()

const categoryIcons = ref([
  {icon: 'fa-solid fa-spa'},
  {icon: 'fa-solid fa-spray-can-sparkles'},
  {icon: 'fa-solid fa-chair'},
  {icon: 'fa-solid fa-shopping-bag'},
  {icon: 'fa-solid fa-paint-roller'},
  {icon: 'fa-solid fa-blender'},
  {icon: 'fa-solid fa-laptop'},
  {icon: 'fa-solid fa-shirt'}
])

const categories = computed(() => productsStore.categories)

onMounted(() => {
  productsStore.fetchCategories()
})

function selectedCategory(categorySlug) {
  router.push(`/explore/${categorySlug}`)
}
</script>

<style lang="scss">
@import "@/assets/styles/components/home/CategorySection.scss";
</style>