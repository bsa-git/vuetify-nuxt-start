<template>
    <ul id="ajax-data">
        <li class="result" :data-validation="result"></li>
        <li class="auth" v-if="result" :data-auth="auth"></li>
        <li class="error" v-else :data-error="error"></li>
    </ul>
</template>
<script>
    import LoginValidator from '~/plugins/validators/valid-login.class'
    import qs from 'qs'

    export default {
        layout: 'ajax',
        async asyncData(context) {
            try {

//                return null;

                if (context.isServer && context.req) { // Server
                    if (context.req.method === 'POST') { // POST
                        // Local async data
                        let _asyncData = {};

                        // Validate login data
                        const formData = context.requestData;
                        const lv = new LoginValidator();
                        _asyncData.result = await lv.validateAll(formData);
                        if (_asyncData.result) {
                            console.log(`User successfully authorized.`);
                            _asyncData.auth = qs.stringify({email: formData.email});
                            return _asyncData;
                        } else {
                            let error = {};
                            const errors = lv.validator.getErrors().errors;
                            console.log('Errors: ', errors);
                            if (_.find(errors, ['rule', 'in'])) { // Error authorized
                                error.message = 'Error authorized! Email or password not registration.';
                            } else { // Other errors
                                error.message = `Error validation! ${errors[0].msg}`;
                            }
                            error.statusCode = 401;
                            console.log(error.message);
                            _asyncData.error = qs.stringify(error);
                            return _asyncData;
                        }
                    }
                }
            }
            catch
                (e) {
                console.log(e.message)
                context.error(e)
            }
        }
    }
</script>