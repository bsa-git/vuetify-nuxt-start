<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#2 Modal</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Similar to a Simple Dialog, except that it's not dismissed when touching outside.
                    </blockquote>
                </v-card-text>
                <v-layout row justify-center>
                    <v-dialog v-model="dialog" persistent>
                        <v-btn slot="activator" dark>Open Dialog</v-btn>
                        <v-card>
                            <v-card-title class="headline">Use Google's location service?</v-card-title>
                            <v-card-text>
                                Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                            </v-card-text>
                            <v-card-actions>
                                <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">
                                    Disagree
                                </v-btn>
                                <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Agree
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-layout>
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
        data() {
            return {
                dialog: false
            }
        }
    }
</script>