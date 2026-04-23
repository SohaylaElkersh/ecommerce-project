import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import CartCard from '@/components/cart/CartCard.vue'
import { useCartStore } from '@/store/cart.js'

describe('CartCard.vue', () => {
  let product

  const factory = (overrides = {}) => {
    product = {
      id: 1,
      title: 'Test Product',
      thumbnail: 'test.jpg',
      price: 50,
      quantity: 2,
      ...overrides
    }

    const wrapper = shallowMount(CartCard, {
      props: {
        product
      },
      global: {
        plugins: [createTestingPinia({
          createSpy: jest.fn
        })],
        stubs: {
          QuantityControl: true
        }
      }
    })
    return wrapper
  }

  it('renders product information correctly', () => {
    const wrapper = factory()
    expect(wrapper.find('.cart-card__title').text())
      .toBe('Test Product')
    expect(wrapper.find('.cart-card__price').text())
      .toBe('$50')
    expect(wrapper.find('.cart-card__image').attributes('src'))
      .toBe('test.jpg')
  })

  it('calls removeFromCart when remove button is clicked', async () => {
    const wrapper = factory()
    const store = useCartStore()
    await wrapper.find('.cart-card__remove').trigger('click')
    expect(store.removeFromCart).toHaveBeenCalled()
  })

  it('increments quantity', () => {
    const wrapper = factory({ quantity: 2 })
    const store = useCartStore()
    wrapper.vm.incrementQuantity()
    expect(store.updateCartQuantity).toHaveBeenCalled()
  })

  it('decrements quantity when > 1', () => {
    const wrapper = factory({ quantity: 3 })
    const store = useCartStore()
    wrapper.vm.decrementQuantity()
    expect(store.updateCartQuantity).toHaveBeenCalled()
  })

  it('does NOT decrement when quantity is 1', () => {
    const wrapper = factory({ quantity: 1 })
    const store = useCartStore()
    wrapper.vm.decrementQuantity()
    expect(store.updateCartQuantity).not.toHaveBeenCalled()
  })

  it('renders QuantityControl component', () => {
    const wrapper = factory()
    expect(wrapper.findComponent({ name: 'QuantityControl' }).exists()).toBe(true)
  })
})