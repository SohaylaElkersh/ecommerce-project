import actions from '@/store/products/actions'
import * as api from '@/services/api/products'

jest.mock('@/services/api/products')

describe('product actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
    jest.clearAllMocks()
  })

  it('fetchProduct commits product', async () => {
    api.fetchProductApi.mockResolvedValue({ id: 1 })
    const result = await actions.fetchProduct({ commit }, 1)
    expect(commit).toHaveBeenCalledWith('setProduct', { id: 1 })
    expect(result).toEqual({ id: 1 })
  })

  it('fetchProduct handles error', async () => {
    api.fetchProductApi.mockRejectedValue(new Error('fail'))
    await expect(
      actions.fetchProduct({ commit }, 1)
    ).rejects.toThrow('fail')
    expect(commit).toHaveBeenCalledWith('setProduct', null)
  })

  it('fetchCategories commits limited categories', async () => {
    api.fetchCategoriesApi.mockResolvedValue(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'])
    await actions.fetchCategories({ commit })
    expect(commit).toHaveBeenCalledWith('setCategories', expect.any(Array))
  })

  it('fetchRelatedProducts filters current product', async () => {
    api.fetchRelatedProductsApi.mockResolvedValue({
      products: [
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ]
    })
    await actions.fetchRelatedProducts(
      { commit },
      { category: 'test', productId: 1 }
    )
    expect(commit).toHaveBeenCalledWith(
      'setRelatedProducts',
      expect.not.arrayContaining([{ id: 1 }])
    )
  })

  it('fetchProducts appends products and updates state', async () => {
    api.fetchProductsApi.mockResolvedValue({
      products: [{ id: 1 }],
      total: 10
    })
    const state = {
      currentCategory: null,
      limit: 12,
      skip: 0
    }
    await actions.fetchProducts({ state, commit }, {})
    expect(commit).toHaveBeenCalledWith('appendProducts', [{ id: 1 }])
    expect(commit).toHaveBeenCalledWith('incrementSkip')
    expect(commit).toHaveBeenCalledWith('setTotal', 10)
  })

  it('sets loading false after fetchProducts', async () => {
    api.fetchProductsApi.mockResolvedValue({
      products: [],
      total: 0
    })
    const state = { currentCategory: null, limit: 12, skip: 0 }
    await actions.fetchProducts({ state, commit }, {})
    expect(commit).toHaveBeenCalledWith('setLoading', false)
  })
})