<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#2 Dark theme with label</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        The dark theme compliments darker backgrounds.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-card class="secondary elevation-0">
                        <v-card-text>
                            <v-container fluid>

                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader class="grey--text text--lighten-1">Normal with hint text/label
                                        </v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-1"
                                                label="Label Text"
                                                dark
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader class="grey--text text--lighten-1">Focus</v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-2"
                                                label="Label Text"
                                                value="Input text"
                                                class="input-group--focused"
                                                dark
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader class="grey--text text--lighten-1">Normal with input text + label
                                        </v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-3"
                                                label="Label Text"
                                                value="Input text"
                                                dark
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader class="grey--text text--lighten-1">Disabled</v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-3"
                                                label="Label Text"
                                                value="Input text"
                                                disabled
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