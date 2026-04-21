export default {
  cartProducts: (state) => state.cart,

  cartTotal() {
    return this.cart.reduce((total, item) =>
      total + (item.price * item.quantity), 0)
  },

  cartItemCount() {
    return this.cart.reduce((total, item) =>
      total + item.quantity, 0)
  }
}