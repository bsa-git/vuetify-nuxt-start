<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#11 Alternative label multi-line error state</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        The error state can also be applied to the alternative label style.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-stepper alt-labels>
                        <v-stepper-header>
                            <v-stepper-step step="3" complete>Ad type</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="4" complete>Ad style</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="5" v-bind:rules="[() => false]">
                                Custom channels
                                <small>Alert message</small>
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="6">Get code</v-stepper-step>
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