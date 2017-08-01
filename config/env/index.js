import global from '~/config/env/global'
import development from '~/config/env/development'
import production from '~/config/env/production'
import testing from '~/config/env/testing'
import env from '~/env'

env.node_env = process.env.NODE_ENV

const appEnv = env.app_env ? env.app_env : 'development'

const config = {
    development: development,
    production: production,
    testing: testing
}

const envConfig = _.merge(config[appEnv], env[appEnv])
const globalConfig = _.merge(global, env['global'])
const appConfig = _.merge(globalConfig, envConfig)

export default appConfig
