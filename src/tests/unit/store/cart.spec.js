import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/store/cart.js'

describe('Cart Store (Pinia)', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useCartStore()
  })

// state + getters
  it('starts with empty cart', () => {
    expect(store.cart).toEqual([])
  })

  it('returns cart products', () => {
    store.cart = [
      { id: 1, price: 10, quantity: 2 }
    ]
    expect(store.cartProducts).toEqual(store.cart)
  })

  it('calculates cart total correctly', () => {
    store.cart = [
      { id: 1, price: 10, quantity: 2 },
      { id: 2, price: 5, quantity: 3 }
    ]
    expect(store.cartTotal).toBe(35)
  })

  it('calculates cart item count correctly', () => {
    store.cart = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 }
    ]
    expect(store.cartItemCount).toBe(5)
  })

  it('handles empty cart safely', () => {
    store.cart = []
    expect(store.cartTotal).toBe(0)
    expect(store.cartItemCount).toBe(0)
  })

//actions
  it('adds new product to cart', () => {
    store.addToCart({ id: 1, price: 10, quantity: 1 })
    expect(store.cart.length).toBe(1)
    expect(store.cart[0].id).toBe(1)
  })

  it('increments quantity if product already exists', () => {
    store.cart = [{ id: 1, price: 10, quantity: 1 }]
    store.addToCart({ id: 1, price: 10, quantity: 2 })
    expect(store.cart[0].quantity).toBe(3)
  })

  it('adds default quantity when not provided', () => {
    store.addToCart({ id: 2, price: 10 })
    expect(store.cart[0].quantity).toBe(1)
  })

  it('removes product from cart', () => {
    store.cart = [
      { id: 1 },
      { id: 2 }
    ]
    store.removeFromCart(1)
    expect(store.cart.length).toBe(1)
    expect(store.cart[0].id).toBe(2)
  })

  it('updates cart quantity', () => {
    store.cart = [{ id: 1, quantity: 2 }]
    store.updateCartQuantity({
      productId: 1,
      quantity: 5
    })
    expect(store.cart[0].quantity).toBe(5)
  })

  it('does nothing if product not found in updateCartQuantity', () => {
    store.cart = [{ id: 1, quantity: 2 }]
    store.updateCartQuantity({
      productId: 999,
      quantity: 5
    })
    expect(store.cart[0].quantity).toBe(2)
  })
})