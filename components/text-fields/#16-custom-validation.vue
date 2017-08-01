<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#16 Custom validation</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        If you want to skip the built in validation and use your own or a plugin such as
                        <a href="https://github.com/monterail/vuelidate" target="_blank">vuelidate</a> or
                        <a href="https://github.com/logaretm/vee-validate" target="_blank">vee-validation</a>,
                        you can use the <b>errors</b> or <b>error</b>
                        props. Errors accepts a string or array and error simply places
                        the field in an error state.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-card class="grey lighten-4 elevation-0">
                        <v-card-text>
                            <v-container fluid>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader>Input with error state</v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-1"
                                                label="Label Text"
                                                error
                                                hint="First name"
                                                persistent-hint
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader>Supplied errors</v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-2"
                                                label="Label Text"
                                                value="Input text"
                                                class="input-group--focused"
                                                required
                                                :error-messages="['I cannot be empty', 'Must be more than 2 characters']"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </div>
                <br/>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: [
            'theme'
        ]
    }
</script>