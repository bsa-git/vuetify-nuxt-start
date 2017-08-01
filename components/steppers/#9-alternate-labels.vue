<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#9 Alternate labels</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Steppers also have an alternative label style which places the title under the step itself.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-stepper alt-labels>
                        <v-stepper-header>
                            <v-stepper-step step="1">Ad unit details</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2">Ad sizes</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3">Ad templates</v-stepper-step>
                        </v-stepper-header>
                    </v-stepper>
                    <v-stepper alt-labels class="mt-5">
                        <v-stepper-header>
                            <v-stepper-step step="1">Ad unit details</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2">
                                Ad sizes
                                <small>Optional</small>
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3">Ad templates</v-stepper-step>
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