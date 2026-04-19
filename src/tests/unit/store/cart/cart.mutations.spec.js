import mutations from '@/store/modules/cart/mutations'

describe('cart mutations', () => {
  let state

  beforeEach(() => {
    state = {
      cart: []
    }
  })

  it('adds new product to cart', () => {
    mutations.addToCart(state, {
      id: 1,
      price: 10,
      quantity: 1
    })
    expect(state.cart.length).toBe(1)
    expect(state.cart[0].id).toBe(1)
  })

  it('increments quantity if product already exists', () => {
    state.cart = [{ id: 1, price: 10, quantity: 1 }]
    mutations.addToCart(state, {
      id: 1,
      price: 10,
      quantity: 2
    })
    expect(state.cart[0].quantity).toBe(3)
  })

  it('removes product from cart', () => {
    state.cart = [
      { id: 1 },
      { id: 2 }
    ]
    mutations.removeFromCart(state, 1)
    expect(state.cart.length).toBe(1)
    expect(state.cart[0].id).toBe(2)
  })

  it('updates cart quantity', () => {
    state.cart = [{ id: 1, quantity: 2 }]
    mutations.updateCartQuantity(state, {
      productId: 1,
      quantity: 5
    })
    expect(state.cart[0].quantity).toBe(5)
  })

  it('does nothing if product not found in updateCartQuantity', () => {
    state.cart = [{ id: 1, quantity: 2 }]
    mutations.updateCartQuantity(state, {
      productId: 999,
      quantity: 5
    })
    expect(state.cart[0].quantity).toBe(2)
  })
})