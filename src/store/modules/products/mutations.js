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
  appendProductsByCategory(state, products) {
    state.ProductsByCategory.push(...products)
  },
  setCurrentCategory(state, category) {
    state.currentCategory = category;
  },
  incrementSkipByCategory(state) {
    state.skipByCategory += state.limit;
  },
  setTotalByCategory(state, total) {
    state.totalByCategory = total;
  },
}