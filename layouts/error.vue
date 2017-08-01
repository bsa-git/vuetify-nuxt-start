<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card class="text-xs-center" hover raised>
                <br/>
                <br/>
                <!-- Card Media -->
                <img id="img-error" src="/images/system/error.png" alt="Error">
                <!-- Card Content -->
                <v-card-text>
                    <div class="display-4">{{ statusCode }}</div>
                    <div class="headline">{{ title }}</div>
                    <div class="body-2">{{ description }}</div>
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
        props: ['error'],
        head() {
            return {
                title: 'Error: ' + this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ]
            }
        },
        computed: {
            title: function () {

                // Show alarm for debug
                if(!this.$isServer && this.config.debug){
                    alert(this.error);
                }

                // Set title
                let title = '';
                if(this.error.name){
                    const statusCode = this.error.statusCode;
                    title = statusCode ? HttpBox.getHttpCode(statusCode) : this.error.name
                }else {
                    title = 'System Error'
                }
                 return title
            },
            description: function () {
                // Set description
                let description = '';
                if(this.error.name){
                    description = this.error.message
                }else {
                    description = 'Back to administrator.'
                }
                return description
            },
            statusCode: function () {
                let statusCode = '';
                if(this.error.name){
                    statusCode = this.error.statusCode? this.error.statusCode : ''
                }else {
                    statusCode = 500
                }
                return statusCode
            },
            ...mapGetters({
                config: 'getConfig'
            })
        }
    }
</script>
