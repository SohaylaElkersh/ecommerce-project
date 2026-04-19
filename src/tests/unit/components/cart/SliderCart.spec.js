import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SliderCart from '@/components/layout/SliderCart.vue'
import CartCard from '@/components/cart/CartCard.vue'
import PaymentSection from '@/components/cart/PaymentSection.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('SliderCart.vue', () => {
  let getters
  let store

  const factory = (cartProductsMock = []) => {
    getters = {
      'cart/cartProducts': () => cartProductsMock
    }

    store = new Vuex.Store({
      getters
    })

    return shallowMount(SliderCart, {
      localVue,
      store,
      stubs: {
        CartCard: true,
        PaymentSection: true
      }
    })
  }

  it('renders header title', () => {
    const wrapper = factory([])
    expect(wrapper.find('.cart-drawer__title').text()).toBe('Shopping Cart')
  })

  it('emits close event when close button is clicked', async () => {
    const wrapper = factory([])
    await wrapper.find('.cart-drawer__close').trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
    expect(wrapper.emitted().close.length).toBe(1)
  })

  it('renders empty state when cart is empty', () => {
    const wrapper = factory([])
    expect(wrapper.find('.cart-drawer__empty').exists()).toBe(true)
    expect(wrapper.find('.cart-drawer__empty-title').text())
      .toBe('Your Cart is Empty!')
  })

  it('renders cart items when products exist', () => {
    const mockProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' }
    ]
    const wrapper = factory(mockProducts)
    const items = wrapper.findAllComponents(CartCard)
    expect(items.length).toBe(2)
  })

  it('renders PaymentSection when cart has products', () => {
    const mockProducts = [
      { id: 1, name: 'Product 1' }
    ]
    const wrapper = factory(mockProducts)
    expect(wrapper.findComponent(PaymentSection).exists()).toBe(true)
  })

  it('does not render PaymentSection when cart is empty', () => {
    const wrapper = factory([])
    expect(wrapper.findComponent(PaymentSection).exists()).toBe(false)
  })
})