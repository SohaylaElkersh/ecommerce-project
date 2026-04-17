import {
  fetchProductsApi,
  fetchProductApi,
  fetchProductsByCategoryApi,
  fetchRelatedProductsApi,
  fetchCategoriesApi
} from "@/services/api/products";

export default {
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
  
  async fetchProducts({ state, commit }, { category = null, reset = false } = {}) {
    commit("setLoading", true);

    try {
      if (reset || state.currentCategory !== category) {
        commit("resetProducts");
        commit("setCategory", category);
      }

      let data;
      if (category) {
        data = await fetchProductsByCategoryApi({
          category,
          limit: state.limit,
          skip: state.skip
        });
      } else {
        data = await fetchProductsApi({
          limit: state.limit,
          skip: state.skip
        });
      }

      commit("appendProducts", data.products);
      commit("incrementSkip");
      commit("setTotal", data.total);

    } finally {
      commit("setLoading", false);
    }
  }
};