<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#17 Textarea</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Textarea text-fields have an alternate style.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-card class="grey lighten-4 elevation-0">
                        <v-card-text>
                            <v-subheader>Light Theme</v-subheader>
                            <v-container fluid>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="input-1"
                                                label="Label Text"
                                                multi-line
                                                textarea
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                    </v-card>
                    <br/>
                    <v-card class="secondary elevation-0">
                        <v-card-text>
                            <v-subheader class="white--text" dark>Dark Theme</v-subheader>
                            <v-container fluid>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="input-1"
                                                label="Label Text"
                                                multi-line
                                                textarea
                                                dark
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