export default {
  fetchProducts({ commit, state }) {
    return fetch(`https://dummyjson.com/products?limit=${state.limit}&skip=${state.skip}&select=id,title,thumbnail,price,rating,reviews,discountPercentage`)
      .then(res => res.json())
      .then(data => {
        commit('appendProducts', data.products)
        commit('incrementSkip')
        commit('setTotal', data.total)
      })
  },

  fetchProduct({ commit }, id) {
    return fetch(`https://dummyjson.com/products/${id}?select=id,thumbnail,images,title,price,rating,description,reviews,discountPercentage,category,stock,description`)
      .then(res => {
        if (!res.ok) throw new Error("Product not found")
        return res.json()
      })
      .then(data => {
        commit('setProduct', data)
        return data
      })
      .catch(error => {
        commit('setProduct', null)
        throw error
      })
  },

  fetchRelatedProducts({ commit }, { category, productId }) {
    return fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.products
          .filter(p => p.id !== productId)
          .slice(0, 4)

        commit('setRelatedProducts', filtered)
      })
  },

  fetchCategories({ commit }) {
    return fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        commit('setCategories', data.slice(0, 8))
      })
  }
}