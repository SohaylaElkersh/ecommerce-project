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