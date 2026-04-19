import actions from '@/store/modules/cart/actions'

describe('cart actions', () => {
  it('dispatches addToCart mutation', () => {
    const commit = jest.fn()
    actions.addToCart({ commit }, { id: 1 })
    expect(commit).toHaveBeenCalledWith('addToCart', { id: 1 })
  })

  it('dispatches removeFromCart mutation', () => {
    const commit = jest.fn()
    actions.removeFromCart({ commit }, 1)
    expect(commit).toHaveBeenCalledWith('removeFromCart', 1)
  })

  it('dispatches updateCartQuantity mutation', () => {
    const commit = jest.fn()
    const payload = { productId: 1, quantity: 3 }
    actions.updateCartQuantity({ commit }, payload)
    expect(commit).toHaveBeenCalledWith('updateCartQuantity', payload)
  })
})