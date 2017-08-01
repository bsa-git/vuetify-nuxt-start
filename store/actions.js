// --- Mutation types --- //
import types from '~/store/mutation-types'
// --- Config --- //
import config from '~/config/env'
// --- UserAgent --- //
import useragent from 'express-useragent'
// --- API --- //
import apiProducts from '~/store/api/products'


// --- System --- //

const nuxtServerInit = function ({commit}, {req}) {

};

// --- Products --- //

const receiveProducts = function (store, pagination) {
    store.commit(types.SET_LOADING_PRODUCTS, true);
    apiProducts.getProducts(pagination)
        .then(data => {
            store.commit(types.RECEIVE_PRODUCTS, data.items);
            store.commit(types.SET_LOADING_PRODUCTS, false)
        })
};

const receiveTotalProducts = function (store) {
    apiProducts.getTotalProducts()
        .then(data => {
            store.commit(types.RECEIVE_TOTAL_PRODUCTS, data.total)

        })
};


export default {

    // --- System -- //
    nuxtServerInit,

    // --- Products --- //
    receiveProducts,
    receiveTotalProducts
}
