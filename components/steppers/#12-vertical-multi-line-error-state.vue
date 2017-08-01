<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#12 Vertical multi-line error state</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        The same state also applies to Vertical steppers.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-stepper v-model="e13" vertical>
                        <v-stepper-step step="1" complete>
                            Name of step 1
                        </v-stepper-step>
                        <v-stepper-content step="1">
                            <v-card img="/images/doc/steppers/first.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">First.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e13 = 2">Continue</v-btn>
                            <v-btn flat @click.native="e13 = 1">Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-step step="2" complete>Name of step 2</v-stepper-step>
                        <v-stepper-content step="2">
                            <v-card img="/images/doc/steppers/second.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">Second.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e13 = 3">Continue</v-btn>
                            <v-btn flat @click.native="e13 = 1">Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-step step="3" v-bind:rules="[() => false]">
                            Ad templates
                            <small>Alert message</small>
                        </v-stepper-step>
                        <v-stepper-content step="3">
                            <v-card img="/images/doc/steppers/third.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">Third.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e13 = 4">Continue</v-btn>
                            <v-btn flat @click.native="e13 = 1">Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-step step="4">View setup instructions</v-stepper-step>
                        <v-stepper-content step="4">
                            <v-card img="/images/doc/steppers/fourth.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">Fourth.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e13 = 1">Continue</v-btn>
                            <v-btn flat @click.native="e13 = 1">Cancel</v-btn>
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
                e13: 2
            }
        }
    }
</script>