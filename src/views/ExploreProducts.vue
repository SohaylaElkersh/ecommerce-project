<template>
    <div class="main">
        <div class="header">
            <h1>Explore Our Products</h1>
            <div class="sorting">
              <span>Sort By</span>
              <select v-model="selectedSort">
                <option v-for="option in sortOptions" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
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
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
    name: 'ExploreProducts',
    components: {
        ProductCard,
        ProductGrid,
        BaseButton
    },
    data() {
      return {
        isLoading: false,
        selectedSort: 'nothing',
        sortOptions: [
          { value: "nothing", label: "Default"},
          { value: "rating", label: "Highest Rating" },
          { value: "priceLowHigh", label: "Price: Low to High" },
          { value: "priceHighLow", label: "Price: High to Low" }
        ]
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

.sorting {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 20px;
}

.sorting span {
  font-size: 18px;
  margin-right: 7px;
}

.sorting select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 200px;
}

.sorting select:focus {
  border-color: #868686;
}

.btn {
  margin: 50px;
  align-self: center;
}
</style>