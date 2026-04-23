import { defineStore } from 'pinia'

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: []
  }),
  
  getters: {
    // Returns all items in the cart
    cartProducts: (state) => state.cart,
  
    // sum of (price × quantity) for all items
    cartTotal() {
      return this.cart.reduce((total, item) =>
        total + (item.price * item.quantity), 0)
    },
  
    // Calculates total number of items in cart
    cartItemCount() {
      return this.cart.reduce((total, item) =>
        total + item.quantity, 0)
    }    
  },

  actions: {  
    // Adds a product to the cart
    // If product already exists:
    // increases its quantity
    // Otherwise:
    // adds new item with default quantity = 1
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += (product.quantity || 1)
      // console.log('ddd')
      } else {
        this.cart.push({ ...product, quantity: product.quantity || 1 })
      }
    },

    // Removes a product from the cart by ID
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId)
    },

    // Updates quantity of a specific cart item
    updateCartQuantity({ productId, quantity }) {
      const cartItem = this.cart.find((item) => item.id === productId)
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    }
  }  
});