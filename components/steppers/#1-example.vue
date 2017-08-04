<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#1 Example</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        A stepper can be used for a multitude of scenarios, including shopping carts, record creation and more.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-stepper v-model="e1">
                        <v-stepper-header>
                            <v-stepper-step step="1" :complete="e1 > 1">Name of step 1</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2" :complete="e1 > 2">Name of step 2</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3">Name of step 3</v-stepper-step>
                        </v-stepper-header>
                        <v-stepper-content step="1">
                            <v-card img="/img/doc/steppers/first.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">First.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e1 = 2" light>Continue</v-btn>
                            <v-btn flat @click.native="e1 = 1">Cancel</v-btn>

                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-card img="/img/doc/steppers/second.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">Second.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e1 = 3" light>Continue</v-btn>
                            <v-btn flat @click.native="e1 = 1">Cancel</v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <v-card img="/img/doc/steppers/third.jpg" height="300px">
                                <v-card-text class="white--text pl-3 pt-3 pb-3">Third.jpg</v-card-text>
                            </v-card>
                            <v-btn secondary dark @click.native="e1 = 1" light>Continue</v-btn>
                            <v-btn flat @click.native="e1 = 1">Cancel</v-btn>
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
                e1: 0
            }
        }
    }
</script>