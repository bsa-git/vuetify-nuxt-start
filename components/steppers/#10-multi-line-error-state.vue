<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#10 Multi-line error state</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        An error state can be displayed to notify the user of some action that must be taken.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-stepper>
                        <v-stepper-header>
                            <v-stepper-step step="1">Ad unit details</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2" v-bind:rules="[() => false]">
                                Ad templates
                                <small>Alert message</small>
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3">Ad sizes</v-stepper-step>
                        </v-stepper-header>
                    </v-stepper>
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