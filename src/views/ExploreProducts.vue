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

<script>   
import BreadcrumbHeader from '@/components/navigation/BreadcrumbHeader.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';
import SortingSelect from '@/components/products/SortingSelect.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton.vue';
import { useProductsStore } from '@/store/products';

export default {
  name: 'ExploreProducts',
  components: {
    ProductCardSkeleton,
    BreadcrumbHeader,
    ProductCard,
    ProductGrid,
    BaseButton,
    SortingSelect
  },
  setup() {
    const productsStore = useProductsStore()
    return { productsStore }
  },    
  data() {
    return {
      selectedSort: 'nothing',
    }
  },
  computed: {
    products() {
      return this.productsStore.sortedProducts(this.selectedSort)
    },
    isLoading() {
    return this.productsStore.isLoading;
    },
    total() {
      return this.productsStore.total
    }
  },
  methods: {
    async loadMore() {
      await this.productsStore.fetchProducts({ category: this.$route.params.slug || null });
    }
  },
  watch: {
  '$route.params.slug': {
    immediate: true,
    handler(slug) {
      this.productsStore.fetchProducts({ category: slug || null, reset: true });
    }
  }
}
}
</script>

<style lang="scss">
@import "@/assets/styles/pages/ExploreProducts.scss";
</style>