import {
  fetchProductsApi,
  fetchProductApi,
  fetchProductsByCategoryApi,
  fetchRelatedProductsApi,
  fetchCategoriesApi
} from "@/services/api/products"

export default {
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

  async fetchRelatedProducts({ category, productId }) {
    const data = await fetchRelatedProductsApi(category);
    const filtered = data.products.filter(p => p.id !== productId).slice(0, 4);
    this.relatedProducts = filtered;
  },

  async fetchCategories() {
    const data = await fetchCategoriesApi();
    this.categories = data.slice(0, 8);
  },

  async fetchProducts({ category = null, reset = false } = {}) {
    this.isLoading = true;
    try {
      if (reset || this.currentCategory !== category) {
        this.products = []
        this.skip = 0
        this.total = 0
        this.currentCategory = category
      }
      let data;
      if (category) {
        data = await fetchProductsByCategoryApi({
          category,
          limit: this.limit,
          skip: this.skip
        })
      } else {
        data = await fetchProductsApi({
          limit: this.limit,
          skip: this.skip
        })
      }
      this.products = [...this.products, ...data.products]
      this.skip += this.limit
      this.total = data.total
    } finally {
      this.isLoading = false
    }
  }
}