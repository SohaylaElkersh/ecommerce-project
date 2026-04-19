import { getDiscountedPriceFromProduct } from '@/utils/pricing'
import getters from '@/store/modules/products/getters' 

jest.mock('@/utils/pricing', () => ({
  getDiscountedPriceFromProduct: jest.fn()
}))

describe('sortedProducts getter', () => {
  let state

  beforeEach(() => {
    state = {
      products: [
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
    }
    getDiscountedPriceFromProduct.mockImplementation((p) =>
      p.price 
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('returns original products when sortBy is "nothing"', () => {
    const result = getters.sortedProducts(state)('nothing')

    expect(result).toBe(state.products)
  })

  it('sorts by price low to high', () => {
    const result = getters.sortedProducts(state)('priceLowHigh')
    expect(result[0].price).toBe(100)
    expect(result[1].price).toBe(200)
  })

  it('sorts by price high to low', () => {
    const result = getters.sortedProducts(state)('priceHighLow')
    expect(result[0].price).toBe(200)
    expect(result[1].price).toBe(100)
  })

  it('sorts by rating descending', () => {
    const result = getters.sortedProducts(state)('rating')
    expect(result[0].rating).toBe(5)
    expect(result[1].rating).toBe(4)
  })

  it('sorts by discount low to high', () => {
    const result = getters.sortedProducts(state)('discountLowHigh')
    expect(result[0].discountPercentage).toBe(10)
    expect(result[1].discountPercentage).toBe(20)
  })

  it('sorts by discount high to low', () => {
    const result = getters.sortedProducts(state)('discountHighLow')
    expect(result[0].discountPercentage).toBe(20)
    expect(result[1].discountPercentage).toBe(10)
  })

  it('sorts by name A-Z', () => {
    const result = getters.sortedProducts(state)('nameAZ')
    expect(result[0].title).toBe('Apple')
    expect(result[1].title).toBe('Banana')
  })

  it('sorts by name Z-A', () => {
    const result = getters.sortedProducts(state)('nameZA')
    expect(result[0].title).toBe('Banana')
    expect(result[1].title).toBe('Apple')
  })
})