<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#6 Time pickers - Light</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Time pickers have the light theme enabled by default.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 lg4 class="ma-3">
                            <v-time-picker v-model="e4"></v-time-picker>
                        </v-flex>
                        <v-flex xs12 lg4 class="ma-3">
                            <v-time-picker v-model="e4" landscape></v-time-picker>
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
                e4: null,
            }
        }
    }
</script>