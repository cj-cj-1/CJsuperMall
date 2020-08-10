import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      let oldProduct = null;
      for (let item of state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item;
        }
      }
      if(oldProduct) {
        console.log("hhh")
        oldProduct.count ++;
      }else{
        payload.count = 1;
        state.cartList.push(payload)
      }

    }
  },
  actions: {

  },
  getters: {
    cartLength(state) {
      let sum = 0;
      for(let item of state.cartList) {
        sum += item.count;
      }
      console.log(sum)
      return sum
      // return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  },
  modules: {
  }
})
