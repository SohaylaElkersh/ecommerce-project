export default {
  appendProducts(state, products) {
    state.products = [...state.products, ...products]
  },
  setProduct(state, product) {
    state.product = product
  },
  setRelatedProducts(state, products) {
    state.relatedProducts = products
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  incrementSkip(state) {
    state.skip += state.limit
  },
  setTotal(state, total) {
    state.total = total
  },
  setLoading(state, value) {
    state.isLoading = value;
  },
  resetProducts(state) {
    state.products = [];
    state.skip = 0;
    state.total = 0;
  }    
}