<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#13 Required fields</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Designates the input as required
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 md6 offset-md3>
                            <v-card>
                                <v-toolbar class="indigo">
                                    <v-card-title>
                                        <span class="white--text">DMV Application</span>
                                    </v-card-title>
                                </v-toolbar>
                                <v-card-text>
                                    <span class="title">Personal Info</span>
                                    <v-text-field
                                            label="Legal first name"
                                            class="mt-5"
                                            v-model="first"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            label="Legal middle name"
                                            hint="example of helper text only on focus"
                                            v-model="middle"
                                    ></v-text-field>
                                    <v-text-field
                                            label="Legal last name"
                                            hint="example of persistent helper text"
                                            persistent-hint
                                            v-model="last"
                                            required
                                    ></v-text-field>
                                    <small>*indicates required field</small>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
                <br/>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: [
            'theme'
        ],
        data () {
            return {
                first: '',
                middle: '',
                last: ''
            }
        }
    }
</script>