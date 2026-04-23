import { setActivePinia, createPinia } from 'pinia'
import { useProductsStore } from '@/store/products.js'
import * as api from '@/services/api/products'
import { getDiscountedPriceFromProduct } from '@/utils/pricing'

jest.mock('@/services/api/products')
jest.mock('@/utils/pricing', () => ({
  getDiscountedPriceFromProduct: jest.fn()
}))

describe('Products Store (Pinia)', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useProductsStore()

    store.products = [
      {
        id: 1,
        title: 'Banana',
        rating: 4,
        discountPercentage: 10,
        price: 100
      },
      {
        id: 2,
        title: 'Apple',
        rating: 5,
        discountPercentage: 20,
        price: 200
      }
    ]

    getDiscountedPriceFromProduct.mockImplementation((p) => p.price)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

//getters
  it('returns random products', () => {
    const result = store.randomProducts
    expect(result.length).toBeLessThanOrEqual(4)
  })

  it('returns original products when sortBy is nothing', () => {
    const result = store.sortedProducts('nothing')
    expect(result).toEqual(store.products)
  })

  it('sorts by price low to high', () => {
    const result = store.sortedProducts('priceLowHigh')
    expect(result[0].price).toBe(100)
    expect(result[1].price).toBe(200)
  })

  it('sorts by price high to low', () => {
    const result = store.sortedProducts('priceHighLow')
    expect(result[0].price).toBe(200)
  })

  it('sorts by rating', () => {
    const result = store.sortedProducts('rating')
    expect(result[0].rating).toBe(5)
  })

  it('sorts by discount low to high', () => {
    const result = store.sortedProducts('discountLowHigh')
    expect(result[0].discountPercentage).toBe(10)
  })

  it('sorts by discount high to low', () => {
    const result = store.sortedProducts('discountHighLow')
    expect(result[0].discountPercentage).toBe(20)
  })

  it('sorts by name A-Z', () => {
    const result = store.sortedProducts('nameAZ')
    expect(result[0].title).toBe('Apple')
  })

  it('sorts by name Z-A', () => {
    const result = store.sortedProducts('nameZA')
    expect(result[0].title).toBe('Banana')
  })

// actions
  it('fetchProduct sets product', async () => {
    api.fetchProductApi.mockResolvedValue({ id: 1 })
    const result = await store.fetchProduct(1)
    expect(store.product).toEqual({ id: 1 })
    expect(result).toEqual({ id: 1 })
  })

  it('fetchProduct handles error', async () => {
    api.fetchProductApi.mockRejectedValue(new Error('fail'))
    await expect(store.fetchProduct(1)).rejects.toThrow('fail')
    expect(store.product).toBeNull()
  })

  it('fetchCategories limits categories', async () => {
    api.fetchCategoriesApi.mockResolvedValue(['a','b','c','d','e','f','g','h','i'])
    await store.fetchCategories()
    expect(store.categories.length).toBe(8)
  })

  it('fetchRelatedProducts filters current product', async () => {
    api.fetchRelatedProductsApi.mockResolvedValue({ products: [{ id: 1 }, { id: 2 }, { id: 3 }] })
    await store.fetchRelatedProducts({ category: 'test', productId: 1 })
    expect(store.relatedProducts.every(p => p.id !== 1)).toBe(true)
  })

  it('fetchProducts appends products and updates state', async () => {
    api.fetchProductsApi.mockResolvedValue({ products: [{ id: 1 }], total: 10 })
    await store.fetchProducts({})
    expect(store.products.length).toBeGreaterThan(0)
    expect(store.total).toBe(10)
    expect(store.skip).toBe(store.limit)
  })

  it('resets when category changes', async () => {
    store.products = [{ id: 99 }]
    store.currentCategory = 'old'
    api.fetchProductsByCategoryApi.mockResolvedValue({ products: [{ id: 1 }], total: 5 })
    await store.fetchProducts({ category: 'new', reset: true })
    expect(store.products[0].id).toBe(1)
    expect(store.currentCategory).toBe('new')
  })

  it('sets loading state correctly', async () => {
    api.fetchProductsApi.mockResolvedValue({ products: [], total: 0 })
    const promise = store.fetchProducts()
    expect(store.isLoading).toBe(true)
    await promise
    expect(store.isLoading).toBe(false)
  })
})