// --- Mutation types --- //
import types from '~/store/mutation-types'
import config from '~/config/env/index'
import Http from '~/plugins/lib/http.class'

export default async function (context) {
    try {
        // Set config for context and store
        context.config = config;
        context.store.commit(types.SET_CONFIG, config);

        // Check maintenance mode
        if (config.maintenance && context.route.path !== '/maintenance') {
            context.redirect('/maintenance')
        }

        // Get request data
        const http = new Http(context);
        if (http.isServerHost()) {
            if (http.isPost() || http.isPut()) {
                context.requestData = await http.getRequestData();
            }
        }
    } catch (e) {
        context.error(e)
    }
}