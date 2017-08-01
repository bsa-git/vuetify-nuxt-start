<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#8 Multi-Line Dark</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Multi-line text-fields can be set to autogrow allowing the field to scale with the input.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-card class="secondary elevation-0">
                        <v-card-text>
                            <v-container fluid>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader class="grey--text text--lighten-1">Normal with hint text
                                        </v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-7-1"
                                                label="Label Text"
                                                multi-line
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
                                                name="input-7-2"
                                                label="Label Text"
                                                value="Input Text"
                                                class="input-group--focused"
                                                multi-line
                                                dark
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader class="grey--text text--lighten-1">
                                            Normal with multi-line input text
                                        </v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-7-2"
                                                label="Label Text"
                                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                                single-line
                                                multi-line
                                                dark
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader class="grey--text text--lighten-1">
                                            Normal with multi-line input text
                                        </v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-7-2"
                                                label="Label Text"
                                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                                multi-line
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