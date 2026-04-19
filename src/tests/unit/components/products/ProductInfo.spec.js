import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ProductInfo from '@/components/products/ProductInfo.vue'
import * as pricing from '@/utils/pricing'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProductInfo.vue', () => {
  let store
  let actions
  let product

  const factory = (overrides = {}) => {
    product = {
      title: 'Test Product',
      category: 'Shoes',
      images: ['img1.jpg', 'img2.jpg'],
      thumbnail: 'thumb.jpg',
      rating: 4.5,
      reviews: [{}, {}],
      stock: 5,
      price: 100,
      description: 'Great product',
      ...overrides
    }

    actions = {
      'cart/addToCart': jest.fn()
    }

    store = new Vuex.Store({
      actions
    })

    return shallowMount(ProductInfo, {
      localVue,
      store,
      propsData: { product },
      stubs: {
        BaseButton: true,
        QuantityControl: true,
        RouterLink: true
      }
    })
  }

  it('renders product title and description', () => {
    const wrapper = factory()
    expect(wrapper.find('.product-detail__title').text())
      .toBe('Test Product')
    expect(wrapper.find('.product-detail__description').text())
      .toBe('Great product')
  })

  it('renders correct number of images', () => {
    const wrapper = factory()
    expect(wrapper.findAll('.product-detail__thumbs img').length)
      .toBe(2)
  })

  it('shows correct stock status (in stock)', () => {
    const wrapper = factory({ stock: 5 })
    expect(wrapper.find('.product-detail__stock').text())
      .toContain('In Stock')
  })

  it('shows out of stock when stock is 0', () => {
    const wrapper = factory({ stock: 0 })
    expect(wrapper.find('.product-detail__stock').text())
      .toContain('Out of Stock')
  })

  it('formats original price with toFixed', () => {
    const wrapper = factory({ price: 99.5 })
    expect(wrapper.find('.product-detail__price-original').text())
      .toBe('$99.50')
  })

  it('computes discounted price correctly', () => {
    jest.spyOn(pricing, 'getDiscountedPriceFromProduct')
      .mockReturnValue(80)
    const wrapper = factory()
    expect(wrapper.vm.discountedPrice).toBe('80.00')
  })

  it('increments quantity', () => {
    const wrapper = factory()
    wrapper.vm.incrementQuantity()
    expect(wrapper.vm.quantity).toBe(2)
  })

  it('decrements quantity but not below 1', () => {
    const wrapper = factory()
    wrapper.vm.decrementQuantity()
    expect(wrapper.vm.quantity).toBe(1)
    wrapper.vm.incrementQuantity()
    wrapper.vm.decrementQuantity()
    expect(wrapper.vm.quantity).toBe(1)
  })

  it('dispatches addToCart with correct payload', () => {
    const wrapper = factory()
    wrapper.vm.quantity = 3
    wrapper.vm.addToCart()
    expect(actions['cart/addToCart']).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        title: 'Test Product',
        quantity: 3
      })
    )
  })

  describe('Edge Cases', () => {
    it('handles empty images array safely', () => {
      const wrapper = factory({ images: [] })
      expect(wrapper.findAll('.product-detail__thumbs img').length).toBe(0)
    })
  
    it('handles missing reviews array', () => {
      const wrapper = factory({ reviews: [] })
      expect(wrapper.find('.product-detail__reviews').text()).toContain('(0 Reviews)')
    })
  
    it('handles missing price', () => {
      const wrapper = factory({ price: 0 })
      expect(wrapper.find('.product-detail__price-original').text()).toBe('$0.00')
    })
  
    it('prevents quantity going below 1', () => {
      const wrapper = factory()
      wrapper.vm.decrementQuantity()
      wrapper.vm.decrementQuantity()
      expect(wrapper.vm.quantity).toBe(1)
    })
  
    it('handles large quantity values correctly', () => {
      const wrapper = factory()
      wrapper.vm.quantity = 999
      wrapper.vm.incrementQuantity()
      expect(wrapper.vm.quantity).toBe(1000)
    })
  
    it('handles invalid discount output', () => {
      jest.spyOn(pricing, 'getDiscountedPriceFromProduct')
        .mockReturnValue(NaN)
      const wrapper = factory()
      expect(wrapper.vm.discountedPrice).toBe('NaN')
    })
  })  
})