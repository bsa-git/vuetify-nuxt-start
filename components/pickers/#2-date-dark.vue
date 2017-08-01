<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#2 Date pickers - Dark</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Date pickers come in a dark variant which utilizes the applications primary accent color.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 lg4 class="ma-3">
                            <v-date-picker v-model="e2" actions dark></v-date-picker>
                        </v-flex>
                        <v-flex xs12 lg4 class="ma-3">
                            <v-date-picker v-model="e2" actions landscape dark></v-date-picker>
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
                e2: null,
            }
        }
    }
</script>