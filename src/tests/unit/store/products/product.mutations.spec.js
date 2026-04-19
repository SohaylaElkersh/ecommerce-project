import mutations from '@/store/modules/products/mutations'

describe('product mutations', () => {
  let state

  beforeEach(() => {
    state = {
      products: [],
      product: null,
      categories: [],
      relatedProducts: [],
      skip: 0,
      limit: 12,
      total: 0,
      currentCategory: null,
      isLoading: false
    }
  })

  it('appends products', () => {
    mutations.appendProducts(state, [{ id: 1 }, { id: 2 }])
    expect(state.products.length).toBe(2)
  })

  it('sets product', () => {
    mutations.setProduct(state, { id: 1 })
    expect(state.product.id).toBe(1)
  })

  it('sets categories', () => {
    mutations.setCategories(state, [1, 2, 3])
    expect(state.categories.length).toBe(3)
  })

  it('increments skip correctly', () => {
    state.skip = 0
    state.limit = 12
    mutations.incrementSkip(state)
    expect(state.skip).toBe(12)
  })

  it('sets loading state', () => {
    mutations.setLoading(state, true)
    expect(state.isLoading).toBe(true)
  })

  it('resets products correctly', () => {
    state.products = [{ id: 1 }]
    state.skip = 10
    state.total = 100
    mutations.resetProducts(state)
    expect(state.products).toEqual([])
    expect(state.skip).toBe(0)
    expect(state.total).toBe(0)
  })
})