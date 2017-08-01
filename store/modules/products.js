const state = {
    totalItems: 0,
    loading: false,
    items: [],
    headers: [
        {
            text: 'Dessert (100g serving)',
            left: true,
            sortable: false,
            value: 'name'
        },
        {text: 'Calories', value: 'calories'},
        {text: 'Fat (g)', value: 'fat'},
        {text: 'Carbs (g)', value: 'carbs'},
        {text: 'Protein (g)', value: 'protein'},
        {text: 'Sodium (mg)', value: 'sodium'},
        {text: 'Calcium (%)', value: 'calcium'},
        {text: 'Iron (%)', value: 'iron'}
    ]
}

const mutations = {

    RECEIVE_PRODUCTS (state, products) {
        state.items = products
    },

    RECEIVE_TOTAL_PRODUCTS (state, total) {
        state.totalItems = total
    },

    SET_LOADING_PRODUCTS (state, loading) {
        state.loading = loading
    }
}

export default {
    state,
    mutations
}
