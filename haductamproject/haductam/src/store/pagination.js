const state = {
    currentPage: 1,
    pageSize: 10,
    displayedProducts: []
  }
  
  const mutations = {
    setCurrentPage (state, page) {
      state.currentPage = page
    },
    setPageSize (state, pageSize) {
      state.pageSize = pageSize
    },
    setDisplayedProducts (state, products) {
      state.displayedProducts = products
    }
  }
  
  const actions = {
    setPage ({ commit }, page) {
      commit('setCurrentPage', page)
    },
    setPageSize ({ commit }, pageSize) {
      commit('setPageSize', pageSize)
    },
    updateDisplayedProducts ({ commit, state, getters }) {
      const start = (state.currentPage - 1) * state.pageSize
      const end = start + state.pageSize
      const products = getters.filteredProducts.slice(start, end)
      commit('setDisplayedProducts', products)
    }
  }
  
  const getters = {
    pageCount (state, getters) {
      return Math.ceil(getters.filteredProducts.length / state.pageSize)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }