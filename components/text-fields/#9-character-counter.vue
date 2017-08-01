<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#9 Character counter</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Use a counter to inform a user of the maximum or minium character limit.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md6 class="my-3">
                            <v-card>
                                <v-app top-toolbar id="example-9-1" style="min-height: 0;" standalone>
                                    <v-toolbar class="primary">
                                        <v-btn icon>
                                            <v-icon class="white--text">arrow_back</v-icon>
                                        </v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn icon>
                                            <v-icon class="white--text">more_vert</v-icon>
                                        </v-btn>
                                    </v-toolbar>
                                    <main>
                                        <v-container fluid class="px-3">
                                            <v-layout row wrap>
                                                <v-flex xs12>
                                                    <v-text-field
                                                            label="Title"
                                                            counter
                                                            v-model="title"
                                                            max="50"
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field
                                                            label="Description"
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field
                                                            label="More descriptive text"
                                                    ></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </main>
                                </v-app>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm12 md6 class="my-3">
                            <v-card>
                                <v-app top-toolbar id="example-9-2" style="min-height: 0;">
                                    <v-toolbar class="primary">
                                        <v-btn icon>
                                            <v-icon class="white--text">arrow_back</v-icon>
                                        </v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn icon>
                                            <v-icon class="white--text">more_vert</v-icon>
                                        </v-btn>
                                    </v-toolbar>
                                    <main>
                                        <v-container fluid class="px-3">
                                            <v-layout row wrap>
                                                <v-flex xs12>
                                                    <v-text-field
                                                            label="Title"
                                                            class="input-group--focused"
                                                            v-model="title2"
                                                            counter
                                                            max="50"
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field
                                                            label="Description"
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field
                                                            label="More descriptive text"
                                                    ></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </main>
                                </v-app>
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
        data() {
            return {
                title: 'Preliminary report describing the',
                title2: 'Preliminary report describing the state of California'
            }
        }
    }
</script>