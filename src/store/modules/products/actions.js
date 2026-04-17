import {
  fetchProductsApi,
  fetchProductApi,
  fetchProductsByCategoryApi,
  fetchRelatedProductsApi,
  fetchCategoriesApi
} from "@/services/api/products";

export default {
  async fetchProducts({ commit, state }) {
    const data = await fetchProductsApi({
      limit: state.limit,
      skip: state.skip
    });

    commit('appendProducts', data.products);
    commit('incrementSkip');
    commit('setTotal', data.total);
  },

  async fetchProduct({ commit }, id) {
    try {
      const data = await fetchProductApi(id);
      commit('setProduct', data);
      return data;
    } catch (error) {
      commit('setProduct', null);
      throw error;
    }
  },

  async fetchRelatedProducts({ commit }, { category, productId }) {
    const data = await fetchRelatedProductsApi(category);

    const filtered = data.products
      .filter(p => p.id !== productId)
      .slice(0, 4);

    commit('setRelatedProducts', filtered);
  },

  async fetchCategories({ commit }) {
    const data = await fetchCategoriesApi();
    commit('setCategories', data.slice(0, 8));
  },

  async fetchProductsByCategory({ commit, state }, category) {
    commit("resetProductsByCategory", category);

    const data = await fetchProductsByCategoryApi(category, {
      limit: state.limit,
      skip: state.skipByCategory
    });

    commit("appendProducts", data.products);
    commit("incrementSkipByCategory");
    commit("setTotalByCategory", data.total);
    commit("setCurrentCategory", category);
  }
};