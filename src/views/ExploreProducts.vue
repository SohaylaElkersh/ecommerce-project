<template>
    <div class="main">
        <div class="header">
            <h1>Explore Our Products</h1>
            <div class="sorting">
              <span>Sort By</span>
              <select>
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
import ProductCard from '../components/products/ProductCard.vue';
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
        sortOptions: [
          { value: "rating", label: "Highest Rating" },
          { value: "priceLowHigh", label: "Price: Low to High" },
          { value: "priceHighLow", label: "Price: High to Low" },
          { value: "discount", label: "Discount Percentage" },
          { value: "brand", label: "Brand" },
          { value: "category", label: "Category" }
        ]
      }
    },
    computed: {
      products() {
        return this.$store.state.products 
      },
      total() {
        return this.$store.state.total
      }
    },
    methods: {
      async loadMore() {
        this.isLoading = true;
        try {
          await this.$store.dispatch('fetchProducts');
        } finally {
          this.isLoading = false;
        }
      }
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
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