<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#3 Single line light theme</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Single line text-fields do not float their label on focus or with data.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-card class="grey lighten-4 elevation-0">
                        <v-card-text>
                            <v-container fluid>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader>Normal with hint text</v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-1-3"
                                                label="Hint Text"
                                                single-line
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader>Press</v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-2-3"
                                                label="Hint Text"
                                                class="input-group--focused"
                                                single-line
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader>Focus</v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-3-3"
                                                label="Hint Text"
                                                value="Input text"
                                                class="input-group--focused"
                                                single-line
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader>Normal with input text</v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-3-4"
                                                label="Hint Text"
                                                value="Input text"
                                                single-line
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader>Error</v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-3-5"
                                                label="Hint Text"
                                                value="Input text"
                                                v-bind:rules="[() => 'Username or Password is incorrect.']"
                                                single-line
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs4>
                                        <v-subheader>Disabled</v-subheader>
                                    </v-flex>
                                    <v-flex xs8>
                                        <v-text-field
                                                name="input-3"
                                                label="Label Text"
                                                value="Input text"
                                                disabled
                                                single-line
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