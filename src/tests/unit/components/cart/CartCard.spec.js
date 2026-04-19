import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CartCard from '@/components/cart/CartCard.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CartCard.vue', () => {
  let actions
  let store
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

    actions = {
      'cart/updateCartQuantity': jest.fn(),
      'cart/removeFromCart': jest.fn()
    }

    store = new Vuex.Store({
      actions
    })

    return shallowMount(CartCard, {
      localVue,
      store,
      propsData: {
        product
      },
      stubs: {
        QuantityControl: true
      }
    })
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

  it('dispatches removeFromCart when remove button is clicked', async () => {
    const wrapper = factory()
    await wrapper.find('.cart-card__remove').trigger('click')
    expect(actions['cart/removeFromCart']).toHaveBeenCalledWith(expect.any(Object), 1)
  })

  it('dispatches increment action when incrementQuantity is called', () => {
    const wrapper = factory({ quantity: 2 })
    wrapper.vm.incrementQuantity()
    expect(actions['cart/updateCartQuantity']).toHaveBeenCalledWith(
      expect.any(Object),
      { productId: 1, quantity: 3 }
    )
  })

  it('dispatches decrement action when quantity > 1', () => {
    const wrapper = factory({ quantity: 3 })
    wrapper.vm.decrementQuantity()
    expect(actions['cart/updateCartQuantity']).toHaveBeenCalledWith(
      expect.any(Object),
      { productId: 1, quantity: 2 }
    )
  })

  it('does NOT dispatch decrement when quantity is 1', () => {
    const wrapper = factory({ quantity: 1 })
    wrapper.vm.decrementQuantity()
    expect(actions['cart/updateCartQuantity']).not.toHaveBeenCalled()
  })

  it('emits increment/decrement through QuantityControl component (stub exists)', () => {
    const wrapper = factory()
    expect(wrapper.findComponent({ name: 'QuantityControl' }).exists()).toBe(true)
  })
})