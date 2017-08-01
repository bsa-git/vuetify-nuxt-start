<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#9 Time pickers - 24h format</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        A time picker can be switched to 24hr format.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex md12 lg4 lg-offset8>
                            <v-time-picker v-model="e7" format="24hr"></v-time-picker>
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
                e7: null
            }
        }
    }
</script>