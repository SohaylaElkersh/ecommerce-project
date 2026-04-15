export default {
  cartProducts: (state) => state.cart,

  cartTotal: (state) => {
    return state.cart.reduce((total, item) =>
      total + (item.price * item.quantity), 0)
  },

  cartItemCount: (state) => {
    return state.cart.reduce((total, item) =>
      total + item.quantity, 0)
  }
}