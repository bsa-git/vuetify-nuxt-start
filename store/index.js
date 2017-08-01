// Vue
import Vue from 'vue'
// Vuex
import Vuex from 'vuex'
// Actions
import actions from '~/store/actions'
// Getters
import getters from '~/store/getters'
// Modules
import system from '~/store/modules/system'
import products from '~/store/modules/products'

Vue.use(Vuex)

// A Vuex instance is created by combining the modules, getters, actions
const store = new Vuex.Store({
    actions: actions,
    getters: getters,
    modules: {
        system,
        products
    }
});

export default store
