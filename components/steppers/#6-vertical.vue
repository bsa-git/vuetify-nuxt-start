<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#6 Vertical steppers</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Vertical steppers move users along the y-axis and otherwise work exactly the same as their horizontal counterpart.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-stepper v-model="e6" vertical>
                        <v-stepper-step step="1" v-bind:complete="e6 > 1">
                            Select an app
                            <small>Summarize if needed</small>
                        </v-stepper-step>
                        <v-stepper-content step="1">
                            <v-card img="/img/doc/steppers/first.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">First.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e6 = 2">Continue</v-btn>
                            <v-btn flat @click.native="e6 = 1">Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-step step="2" v-bind:complete="e6 > 2">Configure analytics for this app
                        </v-stepper-step>
                        <v-stepper-content step="2">
                            <v-card img="/img/doc/steppers/second.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">Second.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e6 = 3">Continue</v-btn>
                            <v-btn flat @click.native="e6 = 1">Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-step step="3" v-bind:complete="e6 > 3">Select an ad format and name ad unit
                        </v-stepper-step>
                        <v-stepper-content step="3">
                            <v-card img="/img/doc/steppers/third.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">Third.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e6 = 4">Continue</v-btn>
                            <v-btn flat @click.native="e6 = 1">Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-step step="4">View setup instructions</v-stepper-step>
                        <v-stepper-content step="4">
                            <v-card img="/img/doc/steppers/fourth.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">Fourth.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e6 = 1">Continue</v-btn>
                            <v-btn flat @click.native="e6 = 1">Cancel</v-btn>
                        </v-stepper-content>
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
        ],
        data() {
            return {
                e6: 1
            }
        }
    }
</script>