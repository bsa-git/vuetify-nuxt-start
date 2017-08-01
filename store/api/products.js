import _products from '~/store/data/products'
import config from '~/config/env'

// Get env
const env = config.app_env

const _getProducts = function (pagination) {
    return new Promise((resolve, reject) => {
        const {sortBy, descending, page, rowsPerPage} = pagination

        let items = _products.items

        if (pagination.sortBy) {
            items = items.sort((a, b) => {
                const sortA = a[sortBy]
                const sortB = b[sortBy]

                if (descending) {
                    if (sortA < sortB) return 1
                    if (sortA > sortB) return -1
                    return 0
                } else {
                    if (sortA < sortB) return -1
                    if (sortA > sortB) return 1
                    return 0
                }
            })
        }

        if (rowsPerPage > 0) {
            items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
        }

        setTimeout(() => {
            resolve({
                items
            })
        }, 1000)
    })
}

const _getTotalProducts = function () {
    return new Promise((resolve, reject) => {
        const total = _products.items.length
        setTimeout(() => {
            resolve({
                total
            })
        }, 300)
    })
}

const getProducts = function (pagination) {
    if (env === 'testing') {
        return _getProducts(pagination)
    } else {
        return _getProducts(pagination)
    }
}

const getTotalProducts = function () {
    if (env === 'testing') {
        return _getTotalProducts()
    } else {
        return _getTotalProducts()
    }
}

export default {
    getProducts,
    getTotalProducts
}
