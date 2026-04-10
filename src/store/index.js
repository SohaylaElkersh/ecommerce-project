import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: null,
    categories: []
  },
  getters: {
    relatedProducts: (state) => {
      if (!state.product) return [];
      return state.products.filter(
        p => p.category === state.product.category && p.id !== state.product.id
      ).slice(0, 4);
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setCategories(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    fetchProducts({ commit }) {
      return fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => commit('setProducts', data.products));
    },
    fetchProduct({ commit }, id) {
      return fetch(`https://dummyjson.com/products/${id}`)
        .then(res => {
          if (!res.ok) {
            throw new Error("Product not found"); 
          }
          return res.json();
        })
        .then(data => {
          commit('setProduct', data);
          return data;
        })
        .catch(error => {
          commit('setProduct', null);
          throw error; 
        });
    },
    fetchCategories({commit}) {
      return fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data => {
          const limitedCategories = data.slice(0,6);
          commit('setCategories', limitedCategories);
        });
    }
  }
})
