<template>
    <div class="main">
        <div class="header">
            <h1>Explore Our Products</h1>
            <div class="sorting">
              <SortingSelect v-model="selectedSort"/>
            </div>
        </div>
        <ProductGrid>
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
        </ProductGrid>
        <BaseButton class="btn" @click="loadMore" :disabled="products.length >= total || isLoading">
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
        isLoading: false,
        selectedSort: 'nothing',
      }
    },
    computed: {
      products() {
        return this.$store.getters['products/sortedProducts'](this.selectedSort)
      },
      total() {
        return this.$store.state.products.total
      }
    },
    methods: {
      async loadMore() {
        this.isLoading = true;
        try {
          await this.$store.dispatch('products/fetchProducts');
        } finally {
          this.isLoading = false;
        }
      }
    },
    mounted() {
      this.$store.dispatch('products/fetchProducts');
    }
}
</script>

<style scoped>
.main {
  padding: 10px 60px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn {
  margin: 50px;
  align-self: center;
}
</style>