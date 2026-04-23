<template>
    <div class="explore-products__wrapper">
      <BreadcrumbHeader class="explore-products__breadcrumb"/>
        <div class="explore-products__header">
            <h1>Explore Our Products</h1>
            <div class="explore-products__sorting">
              <SortingSelect v-model="selectedSort"/>
            </div>
        </div>
        <ProductGrid>
          <template v-if="isLoading">
            <ProductCardSkeleton v-for="n in 12" :key="n" />
          </template>
          <template v-else>
            <ProductCard v-for="product in products" :key="product.id" :product="product"/>
          </template>
        </ProductGrid>
        <BaseButton class="explore-products__load-more" @click="loadMore" :disabled="products.length >= total || isLoading">
          {{ isLoading ? 'Loading...' : 'Load More...' }}
        </BaseButton>     
    </div>
</template>

<script setup>   
import BreadcrumbHeader from '@/components/navigation/BreadcrumbHeader.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';
import SortingSelect from '@/components/products/SortingSelect.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton.vue';
import { useProductsStore } from '@/store/products';
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router'

const productsStore = useProductsStore()

const  selectedSort = ref('nothing')

const route = useRoute()
    
// Returns sorted products from store based on selectedSort
const products = computed(() => {
  return productsStore.sortedProducts(selectedSort.value)
})

const isLoading = computed(() => { 
  return productsStore.isLoading;
})

// Total number of available products (used to disable Load More)
const total = computed(() => { 
  return productsStore.total
})

// Fetches more products (optionally filtered by category slug)
async function loadMore() {
  await productsStore.fetchProducts({ category: route.params.slug || null });
}

// Refetches products when category changes
// Resets product list on category switch
watch(() => route.params.slug,
  (slug) => {
    productsStore.fetchProducts({ category: slug || null, reset: true })
  },
  { immediate: true }
)
</script>

<style lang="scss">
@import "@/assets/styles/pages/ExploreProducts.scss";
</style>



// Component Purpose:
// Displays the full product catalog with sorting, filtering by category,
// and incremental loading ("Load More" functionality)