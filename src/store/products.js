import { defineStore } from "pinia";
import { getDiscountedPriceFromProduct } from "@/utils/pricing";

import {
  fetchProductsApi,
  fetchProductApi,
  fetchProductsByCategoryApi,
  fetchRelatedProductsApi,
  fetchCategoriesApi
} from "@/services/api/products";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    product: null,
    categories: [],
    relatedProducts: [],
    skip: 0,
    limit: 12,
    total: 0,
    currentCategory: null,
    isLoading: false
  }),

  getters: {
    // Returns a shuffled subset (4 items) of products
    randomProducts(state) {
      const shuffled = [...state.products].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 4);
    },

    // Returns products sorted dynamically based on selected option
    sortedProducts: (state) => {
      return (sortBy) => {
        if (sortBy === "nothing") return state.products;

        return [...state.products].sort((a, b) => {
          const nameA = (a.title || "").toLowerCase();
          const nameB = (b.title || "").toLowerCase();
          if (sortBy === "priceLowHigh") return getDiscountedPriceFromProduct(a) - getDiscountedPriceFromProduct(b);
          if (sortBy === "priceHighLow") return getDiscountedPriceFromProduct(b) - getDiscountedPriceFromProduct(a);
          if (sortBy === "discountLowHigh") return a.discountPercentage - b.discountPercentage;
          if (sortBy === "discountHighLow") return b.discountPercentage - a.discountPercentage;
          if (sortBy === "rating") return b.rating - a.rating;
          if (sortBy === "nameAZ") return nameA.localeCompare(nameB);
          if (sortBy === "nameZA") return nameB.localeCompare(nameA);
          return 0;
        });
      };
    }
  },

  actions: {   
    // Fetches a single product by ID
    // Updates `product`
    // Resets to null on failure
    async fetchProduct(id) {
      try {
        const data = await fetchProductApi(id);
        this.product = data;
        return data;
      } catch (error) {
        this.product = null;
        throw error;
      }
    }, 

    // Fetches products from same category
    // Excludes current product
    // Limits results to 4 items
    async fetchRelatedProducts({ category, productId }) {
      const data = await fetchRelatedProductsApi(category);
      const filtered = data.products.filter((p) => p.id !== productId).slice(0, 4);
      this.relatedProducts = filtered;
    },

    // Fetches categories from API
    // Limits to first 8 categories
    async fetchCategories() {
      const data = await fetchCategoriesApi();
      this.categories = data.slice(0, 8);
    },
    
   // Fetches product list with support for:
   // Pagination (limit + skip)
   // Category filtering
   // Resetting data when category changes
    async fetchProducts({ category = null, reset = false } = {}) {
      this.isLoading = true;
      try {
        if (reset || this.currentCategory !== category) {
          this.products = [];
          this.skip = 0;
          this.total = 0;
          this.currentCategory = category;
        }
        let data;
        if (category) {
          data = await fetchProductsByCategoryApi({
            category,
            limit: this.limit,
            skip: this.skip
          });
        } else {
          data = await fetchProductsApi({
            limit: this.limit,
            skip: this.skip
          });
        }
        this.products = [...this.products, ...data.products];
        this.skip += this.limit;
        this.total = data.total;
      } finally {
        this.isLoading = false;
      }
    }
  }
});