<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#11 Multi-line with character counter</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        The rules prop accepts an array of callbacks. While validating rules, the current v-model value
                        will be passed to the callback. This callback should return either <code>true</code> or a
                        <code>String</code>, the error message.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <v-card>
                                <v-toolbar class="teal" light>
                                    <v-btn icon>
                                        <v-icon class="white--text">arrow_back</v-icon>
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon class="white--text">more_vert</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-container fluid>
                                        <v-layout row wrap>
                                            <v-flex xs12>
                                                <v-text-field
                                                        label="Title"
                                                        value="Preliminary report"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex xs12>
                                                <v-text-field
                                                        label="Title"
                                                        v-model="title"
                                                        counter
                                                        multi-line
                                                        max="120"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-card>
                                <v-toolbar class="teal" light>
                                    <v-btn icon>
                                        <v-icon class="white--text">arrow_back</v-icon>
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon class="white--text">more_vert</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-container fluid>
                                        <v-layout row wrap>
                                            <v-flex xs12>
                                                <v-text-field
                                                        label="Title"
                                                        value="Preliminary report"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex xs12>
                                                <v-text-field
                                                        label="Title"
                                                        v-model="title2"
                                                        counter
                                                        multi-line
                                                        max="120"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
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
                title: 'Let me only say that it fared with him as with the storm-tossed ship, that miserably drives along the leeward land.',
                title2: 'Let me only say that it fared with him as with the storm-tossed ship, that miserably drives along the leeward land. The port'
            }
        }
    }
</script>