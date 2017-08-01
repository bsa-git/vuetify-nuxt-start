<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#5 Horizontal steps</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Horizontal steppers move users along the x-axis through the defined steps.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-stepper value="1">
                        <v-stepper-header>
                            <v-stepper-step step="1">Select campaign settings</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2">Create an ad group</v-stepper-step>
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