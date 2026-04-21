import getters from '@/store/cart/getters'

describe('cart getters', () => {
  const state = {
    cart: [
      { id: 1, price: 10, quantity: 2 },
      { id: 2, price: 5, quantity: 3 }
    ]
  }

  it('returns cart products', () => {
    expect(getters.cartProducts(state)).toEqual(state.cart)
  })

  it('calculates cart total correctly', () => {
    expect(getters.cartTotal(state)).toBe(35)
  })

  it('calculates cart item count correctly', () => {
    expect(getters.cartItemCount(state)).toBe(5)
  })

  it('handles empty cart safely', () => {
    const emptyState = { cart: [] }
    expect(getters.cartTotal(emptyState)).toBe(0)
    expect(getters.cartItemCount(emptyState)).toBe(0)
  })
})