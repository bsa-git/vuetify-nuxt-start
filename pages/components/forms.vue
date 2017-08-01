<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <forms-snackbar
                :snackbar="snackbar"
                :text="textSnackbar"
                :context="contextSnackbar"
                v-on:onSnackbar="modelSnackbar"
        ></forms-snackbar>
        <forms-login
                :theme="theme"
                :params="authParams"
                v-on:onErrLogin="onErrLogin"
                v-on:onAuthenticated="onAuthenticated"
        ></forms-login>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import FormsSnackbar from '~components/app/snackbar.vue'
    import FormsLogin from '~components/forms/login.vue'
    import LoginValidator from '~/plugins/validators/valid-login.class'
    export default {
        components: {
            FormsSnackbar,
            FormsLogin
        },
        data() {
            return {
                title: 'Components - Forms',
                description: 'Working with forms.',
                snackbar: false,
                textSnackbar: '',
                contextSnackbar: '',
                authParams:{
                    url: '/api/login', // /components/forms
                    ajax: true,
                    reqData: 'json', // form
                    resData: 'html' // json

                }
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ],
                link: []
            }
        },
        async fetch(context) {
            try {
                context.store.commit('SET_THEME', 'comp');
                if (context.isServer && context.req) { // Server
                    if (context.req.method === 'POST') { // POST
                        console.log('forms-fetch-server-post');

                        // Validate login data
                        const lv = new LoginValidator();
                        const result = await lv.validateAll(context.requestData);
                        lv.resultToStore(result, context.store);

                    } else { // GET
                        console.log('forms-fetch-server-get')
                    }
                } else { // Client
                    console.log('forms-fetch-client')
                }
            }
            catch
                (e) {
                console.log(e.message)
                context.error(e)
            }
        }
        ,
        computed: mapGetters({
            theme: 'getTheme'
        }),
        methods: {
            onErrLogin: function (params) {
                const errFirst = params.errors[0];
                this.textSnackbar = errFirst;
                this.snackbar = true;
                this.contextSnackbar = 'error';
            }
            ,
            onAuthenticated: function (auth) {
                this.textSnackbar = `User successfully authorized.`;
                this.snackbar = true
                this.contextSnackbar = 'success';
            }
            ,
            modelSnackbar: function (newValue) {
                this.snackbar = newValue
            }
            ,
        }
    }
</script>

<style lang="stylus" scoped>
    .layout
        margin-bottom: 16px
</style>