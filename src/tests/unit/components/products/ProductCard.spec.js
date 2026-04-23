import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '@/store/cart.js'
import ProductCard from '@/components/products/ProductCard.vue'
import { getDiscountPercentage, getDiscountedPriceFromProduct } from '@/utils/pricing'

jest.mock('@/utils/pricing', () => ({
  getDiscountPercentage: jest.fn(),
  getDiscountedPriceFromProduct: jest.fn()
}))

jest.mock('@/filters/ratingStar.js', () => jest.fn(() => '★★★★☆'))

describe('ProductCard.vue', () => {
  let wrapper
  let cartStore

  const product = {
    id: 1,
    title: 'iPhone 14',
    thumbnail: 'image.jpg',
    price: 100,
    rating: 4.5,
    reviews: [{}, {}, {}]
  }

  const factory = (overrideProduct = product) => {
    wrapper = shallowMount(ProductCard, {
      props: { product: overrideProduct },
      global: {
        plugins: [
          createTestingPinia({
            createSpy: jest.fn
          })
        ],
        mocks: {
          $route: {
            path: '/explore/products'
          }
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    cartStore = useCartStore()
    return wrapper
  }

  beforeEach(() => {
    getDiscountPercentage.mockReturnValue(20)
    getDiscountedPriceFromProduct.mockReturnValue(80)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders product title', () => {
      const wrapper = factory()
      expect(wrapper.find('.product-card__title').text()).toBe(product.title)
    })

    it('renders original price correctly', () => {
      const wrapper = factory()
      expect(wrapper.find('.product-card__price-original').text()).toContain(product.price.toFixed(2))
    })

    it('renders discounted price correctly', () => {
      const wrapper = factory()
      expect(wrapper.find('.product-card__price-discount').text()).toContain('80.00')
    })

    it('renders discount percentage', () => {
      const wrapper = factory()
      expect(wrapper.find('.product-card__discount').text()).toBe('-20%')
    })

    it('renders number of reviews', () => {
      const wrapper = factory()
      expect(wrapper.find('.product-card__reviews').text()).toBe(`(${product.reviews.length})`)
    })

    it('renders rating stars', () => {
      const wrapper = factory()
      expect(wrapper.find('.product-card__stars').text()).toBe('★★★★☆')
    })
  })

  describe('computed logic', () => {
    it('calls discount utilities with product', () => {
      factory()
      expect(getDiscountPercentage).toHaveBeenCalledWith(product)
      expect(getDiscountedPriceFromProduct).toHaveBeenCalledWith(product)
    })
  })

  describe('actions', () => {
    it('calls addToCart when cart button is clicked', async () => {
      const wrapper = factory()
      await wrapper.find('.product-card__cart').trigger('click')
      expect(cartStore.addToCart).toHaveBeenCalledWith(product)
    })
  })

  describe('router link', () => {
    it('handles product with no reviews', async () => {
      const wrapper = factory({ ...product, reviews: [] })
      expect(wrapper.find('.product-card__reviews').text()).toBe('(0)')
    })

    it('builds correct product link', () => {
      const wrapper = factory()
      const link = wrapper.findComponent(RouterLinkStub)
      expect(link.props('to')).toBe(`/product/${product.id}`)
    })
  })

  describe('edge cases', () => {
    it('handles missing product', async () => {
      const wrapper = factory(null)
      expect(wrapper.find('.product-card__title').exists()).toBe(false)
    })

    it('handles invalid price', () => {
      const wrapper = factory({ ...product, price: undefined })
      expect(wrapper.find('.product-card__price-original').exists()).toBe(true)
    })

    it('renders fallback behavior for missing thumbnail', () => {
      const wrapper = factory({ ...product, thumbnail: null })
      const img = wrapper.find('img')
      expect(img.attributes('src')).toBeUndefined()
    })

    it('handles missing rating', () => {
      const wrapper = factory({ ...product, rating: null })
      expect(wrapper.find('.product-card__stars').exists()).toBe(true)
    })
  })
})