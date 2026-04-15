// It's best practice for cart to have actions (for cleaner architecture), even though it doesn't have async logic for now
// for better consistency, scalability, flexibilty and later expansion

export default {
  addToCart({ commit }, product) {
    commit('addToCart', product)
  },
  removeFromCart({ commit }, id) {
    commit('removeFromCart', id)
  },
  updateCartQuantity({ commit }, payload) {
    commit('updateCartQuantity', payload)
  }
}