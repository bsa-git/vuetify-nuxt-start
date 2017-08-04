<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card class="text-xs-center" hover raised>
                <br/>
                <br/>
                <!-- Card Media -->
                <img id="img-error" src="/img/system/error.png" alt="Error">
                <!-- Card Content -->
                <v-card-text>
                    <template v-if="error.name">
                        <div class="display-4">{{ error.statusCode }}</div>
                        <div class="headline">{{ title }}</div>
                        <div class="body-2">{{ description }}</div>
                    </template>
                    <template v-else>
                        <div class="display-4">No Error</div>
                    </template>
                </v-card-text>
                <v-divider></v-divider>
                <!-- Card Actions -->
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            light
                            router
                            to="/"
                            class="secondary white--text"
                    >
                        Back To Home
                        <v-icon class="white--text" right light>home</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    import HttpBox from '~/plugins/lib/http.class'
    export default {
        head() {
            return {
                title: 'Error: ' + this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ],
                link: []
            }
        },
        created: function () {
            this.$store.commit('SET_THEME', 'error')
        },
        computed: {
            title: function () {
                let _title = ''
                if (this.error.name) {
                    const statusCode = this.error.statusCode
                    _title = this.error.statusCode ? HttpBox.getHttpCode(statusCode) : this.error.name
                } else {
                    _title = 'No Error'
                }
                return _title
            },
            description: function () {
                return this.error.name ? this.error.message : ''
            },
            ...mapGetters({
                error: 'getError'
            })
        },
        beforeDestroy: function () {
            this.$store.commit('CLEAR_ERROR')
        }
    }
</script>
