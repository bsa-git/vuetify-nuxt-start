<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#8 Non-linear steppers</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Non-linear steppers allow the user to move through your process in whatever way they choose.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-stepper non-linear>
                        <v-stepper-header>
                            <v-stepper-step step="1" editable>Select campaign settings</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2" editable>Create an ad group</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3" editable>Create an ad</v-stepper-step>
                        </v-stepper-header>
                    </v-stepper>
                    <v-stepper class="mt-5"  non-linear>
                        <v-stepper-header>
                            <v-stepper-step step="1" editable complete>Select campaign settings</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2" editable>Create an ad group</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3" editable complete>Create an ad</v-stepper-step>
                        </v-stepper-header>
                    </v-stepper>
                    <v-stepper value="3" class="mt-5"  non-linear>
                        <v-stepper-header>
                            <v-stepper-step step="1" editable complete>Select campaign settings</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="2" editable complete>Create an ad group</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3" editable complete>Create an ad</v-stepper-step>
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