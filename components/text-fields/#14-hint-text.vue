<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#14 Hint text</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Hint text and forces hint visible.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 md6 offset-md3>
                            <v-card>
                                <v-toolbar class="indigo" dark>
                                    <v-btn icon light>
                                        <v-icon>arrow_back</v-icon>
                                    </v-btn>
                                    <v-toolbar-title>Application</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn icon light>
                                        <v-icon>more_vert</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <h1 class="title">Search for new keywords using a phrase, website or category</h1>
                                    <h2 class="subheading mb-5">Enter one or more of the following</h2>
                                    <v-text-field
                                            label="Your product or service"
                                            value="Grocery delivery"
                                            hint="For example, flowers or used cars"
                                            persistent-hint
                                    ></v-text-field>
                                    <v-text-field
                                            label="Your landing page"
                                            hint="www.example.com/page"
                                            persistent-hint
                                    ></v-text-field>
                                    <v-select
                                            label="Your product category"
                                            hint="Enter or select a product category"
                                            persistent-hint
                                            :items="options"
                                            v-model="select"
                                    ></v-select>
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
        data() {
            return {
                select: null,
                options: [
                    {
                        value: 1,
                        text: 'Option 1'
                    },
                    {
                        value: 2,
                        text: 'Option 2'
                    },
                    {
                        value: 3,
                        text: 'Option 3'
                    }
                ]
            }
        }
    }
</script>