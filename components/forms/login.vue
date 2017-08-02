<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#1 Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        An example of a logging form to enter the system.
                        <p>To login, use <kbd>my@test.com</kbd> as email and <kbd>123456</kbd> as password.</p>
                    </blockquote>
                </v-card-text>
                <!-- Login Form  -->
                <form id="form-1" name="form-1" :action="params.url" method="post"
                      v-on:submit.prevent="submit('form-1')">
                    <v-card-text>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Email*</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                        name="email"
                                        label="Enter your email"
                                        v-model="email"
                                        type="text"
                                        :append-icon="errors.has('email') ? 'error' : 'done'"
                                        v-bind:rules="[vEmail]"
                                        required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Password*</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                        name="password"
                                        label="Enter your password"
                                        hint="At least 6 characters"
                                        v-model="password"
                                        type="password"
                                        :append-icon="errors.has('password') ? 'error' : 'done'"
                                        v-bind:rules="[vPass]"
                                        counter
                                        required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                            </v-flex>
                            <v-flex xs8>
                                <small>*indicates required field</small>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn type="submit" dark>Login</v-btn>
                        <v-btn type="reset" flat light @click.native="clearErrors">Clear</v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {Validator} from 'vee-validate';
    import axios from 'axios'
    import qs from 'qs'
    import cheerio from 'cheerio'

    export default {
        validator: null,
        props: [
            'theme',
            'params'
        ],
        data() {
            return {
                password: '',
                email: '',
                errors: null
            }
        },
        created: function () {
            // Ini validator
            this.iniValidator();
            // Check error
            if (this.isError) {
                this.$emit('onErrLogin', {errors: [this.storeError.message]})
            }
            // Check authenticated
            if (this.isAuthenticated) {
                this.$emit('onAuthenticated', this.auth)
            }
        },
        computed: {
            ...mapGetters({
                isError: 'isError',
                storeError: 'getError',
                isAuthenticated: 'isAuthenticated',
                auth: 'getAuth'
            })
        },
        watch: {
            email(value) {
                this.validator.validate('email', value);
            },
            password(value) {
                this.validator.validate('password', value);
            }
        },
        methods: {
            iniValidator: function () {
                this.validator = new Validator({
                    email: 'required|email',
                    password: 'required|min:6'
                });
                this.$set(this, 'errors', this.validator.errors);
            },
            validateForm() {
                return this.validator.validateAll({
                    email: this.email,
                    password: this.password
                });
            },
            clearErrors() {
                this.errors.clear();
                this.password = '';
                this.email = '';
            },
            submit: function (name) {
                const self = this;
                let formData;
                //-----------------
                this.validateForm().then(result => {
                    if (result) {
                        if (self.params.ajax) {
                            if (self.params.reqData === 'json') { // 'content-type'='application/json'
                                formData = {
                                    password: self.password,
                                    email: self.email
                                };
                            } else { // 'content-type'='application/x-www-form-urlencoded'
                                formData = qs.stringify({
                                    password: self.password,
                                    email: self.email
                                });
                            }
                            axios.post(self.params.url, formData)
                                .then(function (response) {
                                    const $ = cheerio.load(response.data);
                                    const result = $('.result', '#ajax-data').data().validation;
                                    if (result) {
                                        const authData = $('.auth', '#ajax-data').data().auth;
                                        const auth = qs.parse(authData);
                                        self.$store.commit('SET_AUTH', auth);
                                        self.$emit('onAuthenticated', auth)
                                    } else {
                                        const errorData = $('.error', '#ajax-data').data().error;
                                        const error = qs.parse(errorData);
                                        self.$emit('onErrLogin', {errors: [error.message]})
                                    }
                                })
                                .catch(function (error) {
                                    console.log('Axios catch: ', error);
                                    self.$store.commit('SET_ERROR', error)
                                    self.$router.replace('/error')
                                });
                        } else {
                            document.forms[name].submit()
                        }
                    } else {
                        this.$emit('onErrLogin', {errors: this.errors.all()})
                    }
                }).catch(() => {
                    alert('Correct them errors!')
                })
            },
            vEmail: function () {
                if (this.errors.has('email')) {
                    return this.errors.first('email')
                } else {
                    return true
                }
            },
            vPass: function () {
                if (this.errors.has('password')) {
                    return this.errors.first('password')
                } else {
                    return true
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    input:error {
        background-color: #ffdddd;
    }

</style>