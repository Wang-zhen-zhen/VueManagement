import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    setUsername (state, data) {
        console.log(data)
      state.username = data
    }
  },
  actions: {

  },
  getters: {
    getUserName(state) {
      return state.username
    }
  }
})

export default store