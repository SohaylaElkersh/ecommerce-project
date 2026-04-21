export default {
  addToCart(product) {
    const existingItem = this.cart.find(item => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += (product.quantity || 1)
    } else {
      this.cart.push({ ...product, quantity: product.quantity || 1 })
    }
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId)
  },

  updateCartQuantity({ productId, quantity }) {
    const cartItem = this.cart.find(item => item.id === productId)
    if (cartItem) {
      cartItem.quantity = quantity
    }
  }
}