export default {
  appendProducts(state, products) {
    const safeProducts = Array.isArray(products) ? products : [];
  
    state.products = state.products.concat(safeProducts);
  },
  setCategory(state, category) {
    state.currentCategory = category
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