const state = {
    userAgent: null,
    auth: null, // { email: 'my@test.com' } || NULL
    error: {
        statusCode: '',
        name: '',
        message: '',
        stack: ''
    },
    config: {},
    theme: {
        current:{
            base: 'blue',
            primary: 'blue darken-2',
            accent: 'blue accent-2',
            secondary: 'grey darken-3',
            info: 'blue',
            warning: 'amber',
            error: 'red',
            success: 'green'
        },
        register:{
            error: {
                base: 'red'
            },
            home: {
                base: 'blue'
            },
            comp: {
                base: 'brown'
            },
            layout: {
                base: 'brown'
            },
            info: {
                base: 'indigo'
            }
        }
    }
}

const mutations = {

    SET_AUTH (state, auth) {
        state.auth = auth
    },

    SET_ERROR (state, error) {
        state.error = {
            statusCode: error.statusCode ? error.statusCode : '',
            name: error.name,
            message: error.message,
            stack: error.stack
        }
    },

    CLEAR_ERROR (state) {
        state.error.statusCode = ''
        state.error.name = ''
        state.error.message = ''
        state.error.stack = ''
    },

    SET_CONFIG (state, config) {
        state.config = config
    },

    SET_USERAGENT (state, userAgent) {
        state.userAgent = userAgent
    },

    SET_THEME (state, theme) {
        if(!_.isObject(theme)){
            theme = state.theme.register[theme]
        }
        state.theme.current = _.merge(state.theme.current, theme)
    }
}

export default {
    state,
    mutations
}
