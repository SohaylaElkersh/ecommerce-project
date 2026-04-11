import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: null,
    categories: [],
    relatedProducts: [],
    skip: 0,
    limit: 12,
    total: 0,
  },
  getters: {

  },
  mutations: {
    appendProducts(state, products) {
      state.products = [...state.products, ...products]
    },
    setProduct(state, product) {
      state.product = product;
    },
    setRelatedProducts(state, products) {
      state.relatedProducts = products;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    incrementSkip(state) {
      state.skip += state.limit;
    },
    setTotal(state, total) {
      state.total = total;
    },
  },
  actions: {
    fetchProducts({ commit, state }) {
      return fetch(`https://dummyjson.com/products?limit=${state.limit}&skip=${state.skip}&select=id,title,thumbnail,price,rating,reviews,discountPercentage`)
        .then(res => res.json())
        .then(data => {
          commit('appendProducts', data.products);
          commit('incrementSkip');
          commit('setTotal', data.total);
        });
    },
    fetchProduct({ commit }, id) {
      return fetch(`https://dummyjson.com/products/${id}?select=id,thumbnail,images,title,price,rating,description,reviews,discountPercentage,category,stock,description`)
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
    fetchRelatedProducts({ commit }, { category, productId }) {
      return fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {
          const filteredProducts = data.products
            .filter(product => product.id !== productId) // exclude current product
            .slice(0, 4);
    
          commit('setRelatedProducts', filteredProducts);
        });
    },
    fetchCategories({commit}) {
      return fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data => {
          const limitedCategories = data.slice(0,8);
          commit('setCategories', limitedCategories);
        });
    }
  }
})
