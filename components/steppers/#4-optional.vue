<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#4 Optional steps</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        An optional step can be called out with sub-text.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-stepper value="1">
                        <v-stepper-header>
                            <v-stepper-step step="1">Select campaign settings</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2">
                                Create an ad group
                                <small>Optional</small>
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3">Create an ad</v-stepper-step>
                        </v-stepper-header>
                    </v-stepper>
                    <v-stepper value="2" class="mt-5">
                        <v-stepper-header>
                            <v-stepper-step step="1" complete>Select campaign settings</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2">
                                Create an ad group
                                <small>Optional</small>
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3">Create an ad</v-stepper-step>
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