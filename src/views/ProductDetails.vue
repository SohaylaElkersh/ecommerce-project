<template>
  <div class="product-details__wrapper">
    <BreadcrumbHeader class="product-details__breadcrumb" :current-label="product && product.title ? product.title : ''"/>
    <ProductInfo v-if="product" :product="product" />
    <div class="product-details__related" v-if="relatedProducts.length > 0">
      <div class="product-details__related-header">
        <HeaderColor>
          <template #small>More of this category</template>
        </HeaderColor>
      </div>
      <ProductGrid>
        <ProductCard v-for="prod in relatedProducts" :key="prod.id" :product="prod"/>
      </ProductGrid>
    </div>
  </div>
</template>

<script setup>
import BreadcrumbHeader from '@/components/navigation/BreadcrumbHeader.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import HeaderColor from '@/components/UI/HeaderColor.vue';
import ProductInfo from '@/components/products/ProductInfo.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';
import { useProductsStore } from '@/store/products';
import { computed } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'

const productsStore = useProductsStore()
const route = useRoute()
const router = useRouter()

const product = computed(() => productsStore.product)
const relatedProducts = computed(() => productsStore.relatedProducts)

async function fetchData(id) {
  try {
    const product = await productsStore.fetchProduct(id)
    await productsStore.fetchRelatedProducts({
      category: product.category,
      productId: product.id
    })
  } catch (err) {
    router.replace({ name: 'NotFound' }).catch(() => {})
  }
}  

fetchData(route.params.id)

onBeforeRouteUpdate((to) => {
  fetchData(to.params.id)
})  
</script>

<style lang="scss">
@import "@/assets/styles/pages/ProductDetails.scss";
</style>