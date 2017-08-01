<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#5 With Icon</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Icons can be specified as prepended or appended.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-card class="grey lighten-4 elevation-0">
                        <v-card-text>
                            <v-container fluid>
                                <v-layout row wrap>
                                    <v-flex xs4>
                                        <v-subheader>Normal with hint text</v-subheader>
                                    </v-flex>
                                    <v-flex xs12 sm5>
                                        <v-text-field
                                                name="input-1-3"
                                                label="Hint Text"
                                                single-line
                                                prepend-icon="phone"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm3>
                                        <v-select
                                                label="Your phone"
                                                hint="Enter or select a phone"
                                                persistent-hint
                                                :items="items"
                                                v-model="select"
                                        ></v-select>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs4>
                                        <v-subheader>Focus</v-subheader>
                                    </v-flex>
                                    <v-flex xs12 sm5>
                                        <v-text-field
                                                name="input-2-3"
                                                label="Hint Text"
                                                class="input-group--focused"
                                                prepend-icon="phone"
                                                value="650"
                                                single-line
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm3>
                                        <v-select v-bind:items="[{ text: 'Mobile' }]" label="Mobile"></v-select>
                                    </v-flex>

                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs4>
                                        <v-subheader>Normal with input text</v-subheader>
                                    </v-flex>
                                    <v-flex xs12 sm5>
                                        <v-text-field
                                                name="input-3-3"
                                                label="Hint Text"
                                                value="650-555-1234"
                                                prepend-icon="phone"
                                                single-line
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm3>
                                        <v-select v-bind:items="[{ text: 'Mobile' }]" label="Mobile"></v-select>
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
        ],
        data() {
            return {
                select: null,
                items: [
                    {
                        value: '111-111-1111',
                        text: 'HomePhone-1'
                    },
                    {
                        value: '222-222-2222',
                        text: 'HomePhone-2'
                    },
                    {
                        value: '333-333-3333',
                        text: 'HomePhone-3'
                    }
                ]
            }
        }
    }
</script>