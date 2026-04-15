export default {
  addToCart(state, product) {
    const existingItem = state.cart.find(item => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += (product.quantity || 1)
    } else {
      state.cart.push({ ...product, quantity: product.quantity || 1 })
    }
  },

  removeFromCart(state, productId) {
    state.cart = state.cart.filter(item => item.id !== productId)
  },

  updateCartQuantity(state, { productId, quantity }) {
    const cartItem = state.cart.find(item => item.id === productId)
    if (cartItem) {
      cartItem.quantity = quantity
    }
  }
}