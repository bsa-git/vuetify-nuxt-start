// --- System --- //
const getSystem = function (state) {
    return state.system
};

const getUserAgent = function (state) {
    return state.system.userAgent
};

const getTheme = function (state) {
    return state.system.theme.current
};

const getConfig = function (state) {
    return state.system.config
};

const getError = function (state) {
    return state.system.error
};

const isError = function (state) {
    return  !!state.system.error.name
};

const isAuthenticated = function (state) {
    return  !!state.system.auth
};

const getAuth = function (state) {
    return  state.system.auth
};

// --- Products --- //
const getProducts = function (state) {
    return state.products.items
};

const getProductsHeaders = function (state) {
    return state.products.headers
};

const getTotalProducts = function (state) {
    return state.products.totalItems
};

const getLoadingProducts = function (state) {
    return state.products.loading
};

export default {
    // --- System --- //
    getSystem,
    getUserAgent,
    getTheme,
    getConfig,
    getError,
    isError,
    isAuthenticated,
    getAuth,
    // --- Products --- //
    getProducts,
    getProductsHeaders,
    getTotalProducts,
    getLoadingProducts
}
