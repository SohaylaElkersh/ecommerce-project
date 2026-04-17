<template>
    <div class="explore-products__wrapper">
        <div class="explore-products__header">
            <h1>Explore Our Products</h1>
            <div class="sorting">
              <SortingSelect v-model="selectedSort"/>
            </div>
        </div>
        <ProductGrid>
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
        </ProductGrid>
        <BaseButton class="explore-products__load-more" @click="loadMore" :disabled="products.length >= total || isLoading">
          {{ isLoading ? 'Loading...' : 'Load More...' }}
        </BaseButton>     
    </div>
</template>

<script>   
import ProductCard from '@/components/products/ProductCard.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';
import SortingSelect from '@/components/products/SortingSelect.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'ExploreProducts',
  components: {
      ProductCard,
      ProductGrid,
      BaseButton,
      SortingSelect
  },
  data() {
    return {
      selectedSort: 'nothing',
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/sortedProducts'](this.selectedSort)
    },
    isLoading() {
    return this.$store.state.products.isLoading;
    },
    total() {
      return this.$store.state.products.total
    }
  },
  methods: {
    async loadMore() {
      await this.$store.dispatch('products/fetchProducts', {category: this.$route.params.slug || null});
    }
  },
  watch: {
  '$route.params.slug': {
    immediate: true,
    handler(slug) {
      this.$store.dispatch('products/fetchProducts', {category: slug || null, reset: true});
    }
  }
}
}
</script>

<style scoped>
.explore-products__wrapper {
  padding: 10px 60px;
}

.explore-products__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.explore-products__load-more {
  margin: 50px;
  align-self: center;
}
</style>