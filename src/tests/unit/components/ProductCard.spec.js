import { shallowMount } from '@vue/test-utils'
import ProductCard from '@/components/products/ProductCard.vue'
import { getDiscountPercentage, getDiscountedPriceFromProduct } from '@/utils/pricing'

jest.mock('@/utils/pricing', () => ({
  getDiscountPercentage: jest.fn(),
  getDiscountedPriceFromProduct: jest.fn()
}))

jest.mock('@/filters/ratingStar.js', () => jest.fn(() => '★★★★☆'))

describe('ProductCard.vue', () => {
  let wrapper
  let dispatchMock

  const product = {
    id: 1,
    title: 'iPhone 14',
    thumbnail: 'image.jpg',
    price: 100,
    rating: 4.5,
    reviews: [{}, {}, {}]
  }

  beforeEach(() => {
    dispatchMock = jest.fn()
    getDiscountPercentage.mockReturnValue(20)
    getDiscountedPriceFromProduct.mockReturnValue(80)
    wrapper = shallowMount(ProductCard, {
      propsData: { product },
      mocks: {
        $store: {
          dispatch: dispatchMock
        },
        $route: {
          path: '/explore/products'
        }
      },
      stubs: {
        RouterLink: {
          template: '<a><slot /></a>',
          props: ['to']
        }
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders product title', () => {
      expect(wrapper.find('.product-card__title').text()).toBe(product.title)
    })

    it('renders original price correctly', () => {
      expect(wrapper.find('.product-card__price-original').text()).toContain(product.price.toFixed(2))
    })

    it('renders discounted price correctly', () => {
      expect(wrapper.find('.product-card__price-discount').text()).toContain('80.00')
    })

    it('renders discount percentage', () => {
      expect(wrapper.find('.product-card__discount').text()).toBe('-20%')
    })

    it('renders number of reviews', () => {
      expect(wrapper.find('.product-card__reviews').text()).toBe(`(${product.reviews.length})`)
    })

    it('renders rating stars', () => {
      expect(wrapper.find('.product-card__stars').text()).toBe('★★★★☆')
    })
  })

  describe('computed logic', () => {
    it('calls discount utilities with product', () => {
      expect(getDiscountPercentage).toHaveBeenCalledWith(product)
      expect(getDiscountedPriceFromProduct).toHaveBeenCalledWith(product)
    })

    it('formats discounted price to 2 decimals', () => {
      const text = wrapper.find('.product-card__price-discount').text()
      expect(text).toContain('80.00')
    })
  })

  describe('actions', () => {
    it('dispatches addToCart when cart button is clicked', async () => {
      await wrapper.find('.product-card__cart').trigger('click')
      expect(dispatchMock).toHaveBeenCalledWith('cart/addToCart', product)
    })
  })

  describe('router link', () => {
    it('builds correct product link', () => {
      const link = wrapper.findComponent({ name: 'RouterLink' })
      expect(link.props('to')).toBe(`/product/${product.id}`)
    })
  })

  describe('edge cases', () => {
    it('handles product with no reviews', () => {
      wrapper.setProps({
        product: { ...product, reviews: [] }
      })
      expect(wrapper.find('.product-card__reviews').text()).toBe('(0)')
    })

    it('handles missing product', async () => {
      await wrapper.setProps({ product: null })
      expect(wrapper.find('.product-card__title').exists()).toBe(false)
    })

    it('handles null product', () => {
      const wrapper = shallowMount(ProductCard, {
        propsData: { product: null },
        mocks: {
          $store: { dispatch: jest.fn() },
          $route: { path: '/' }
        }
      })
      expect(wrapper.find('.product-card').exists()).toBe(true)
      expect(wrapper.find('.product-card__title').exists()).toBe(false)
    }) 
    
    it('handles invalid price', () => {
      const wrapper = shallowMount(ProductCard, {
        propsData: {
          product: {
            ...product, price: undefined
          }
        },
        mocks: {
          $store: { dispatch: jest.fn() },
          $route: { path: '/' }
        }
      })
      expect(wrapper.find('.product-card__price-original').exists()).toBe(true)
    })
    
    it('renders fallback behavior for missing thumbnail', () => {
      const wrapper = shallowMount(ProductCard, {
        propsData: {
          product: {...product, thumbnail: null}
        },
        mocks: {
          $store: { dispatch: jest.fn() },
          $route: { path: '/' }
        }
      })
      const img = wrapper.find('img')
      expect(img.attributes('src')).toBeUndefined()
    })
    
    it('handles missing rating', () => {
      const wrapper = shallowMount(ProductCard, {
        propsData: {
          product: {...product, rating: null}
        },
        mocks: {
          $store: { dispatch: jest.fn() },
          $route: { path: '/' }
        }
      })
      expect(wrapper.find('.product-card__stars').exists()).toBe(true)
    })
  })
})