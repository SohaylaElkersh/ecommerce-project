import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PaymentSection from '@/components/cart/PaymentSection.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PaymentSection.vue', () => {
  let store
  let getters

  const factory = (cartTotal = 100) => {
    getters = {
      'cart/cartTotal': () => cartTotal
    }

    store = new Vuex.Store({
      getters
    })

    return shallowMount(PaymentSection, {
      localVue,
      store,
      stubs: {
        BaseButton: true,
        BaseInput: true
      }
    })
  }

  it('renders payment summary rows correctly', () => {
    const wrapper = factory(100)
    const rows = wrapper.findAll('.payment-section__row')
    expect(rows.length).toBe(3)
  })

  it('calculates subtotal correctly', () => {
    const wrapper = factory(200)
    expect(wrapper.vm.subtotal).toBe(200)
  })

  it('calculates shipping correctly (10%)', () => {
    const wrapper = factory(200)
    expect(wrapper.vm.shipping).toBe(20)
  })

  it('calculates total correctly', () => {
    const wrapper = factory(200)
    expect(wrapper.vm.total).toBe(220)
  })

  it('formats money values with 2 decimals', () => {
    const wrapper = factory(105.5)
    const money = wrapper.vm.money
    expect(money[0].amount).toBe('105.50') // subtotal
    expect(money[1].amount).toBe('10.55')  // shipping
    expect(money[2].amount).toBe('116.05') // total
  })

  it('renders payment method options', () => {
    const wrapper = factory()
    expect(wrapper.find('#bank').exists()).toBe(true)
    expect(wrapper.find('#cash').exists()).toBe(true)
  })

  it('renders coupon input and buttons', () => {
    const wrapper = factory()
    expect(wrapper.find('.payment-section__coupon-input').exists()).toBe(true)
    expect(wrapper.find('.payment-section__order-button').exists()).toBe(true)
  })
})