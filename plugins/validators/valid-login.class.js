/**
 * Login - validator
 *
 *
 * JavaScript
 *
 * @author   Sergii Beskorovainyi <bsa2657@yandex.ru>
 * @license  MIT <http://www.opensource.org/licenses/mit-license.php>
 * @link     https://github.com/bsa-git/vuetify-nuxt-start/
 */
import {Validator} from 'vee-validate';
class LoginValidator {

    /**
     * Constructor
     */
    constructor() {
        this.validator = new Validator({
            email: 'required|email|in:my@test.com',
            password: 'required|min:6|in:123456'
        });
    }

    /**
     * validateAll
     *
     * @param values Object
     * @return Promise
     */
    validateAll(values) {
        return this.validator.validateAll(values);
    }

    /**
     *  Set result validation to store
     *
     * @param result Boolean
     * @param store Vuex.Store
     */
    resultToStore(result, store) {
        if (result) {
            console.log(`User successfully authorized.`);
            store.commit('SET_AUTH', {email: this.query.email});
        } else {
            const errors = this.validator.getErrors().errors;
            console.log('Errors: ', errors);
            // Show Errors
            if (_.find(errors, ['rule', 'in'])) { // Error authorized
                console.log('Error authorized! Email or password not registration.');
                const e = new Error('Error authorized! Email or password not registration.');
                e.statusCode = 401
                store.commit('SET_ERROR', e)
            } else { // Other errors
                const e = new Error(`Error validation! ${errors[0].msg}`);
                e.statusCode = 401
                store.commit('SET_ERROR', e)
            }
        }
    }
}


export default LoginValidator
