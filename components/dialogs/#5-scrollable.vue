<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#5 Scrollable</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Example of a dialog with scrollable content.
                    </blockquote>
                </v-card-text>
                <v-layout row justify-center>
                    <v-dialog v-model="dialog" scrollable>
                        <v-btn slot="activator" dark>Open Dialog</v-btn>
                        <v-card>
                            <v-card-title class="headline">Select Country</v-card-title>
                            <v-divider></v-divider>
                            <v-card-text style="height: 300px;">
                                <v-radio label="Bahamas, The" v-model="dialogm1" value="bahamas"></v-radio>
                                <v-radio label="Bahrain" v-model="dialogm1" value="bahrain"></v-radio>
                                <v-radio label="Bangladesh" v-model="dialogm1" value="bangladesh"></v-radio>
                                <v-radio label="Barbados" v-model="dialogm1" value="barbados"></v-radio>
                                <v-radio label="Belarus" v-model="dialogm1" value="belarus"></v-radio>
                                <v-radio label="Belgium" v-model="dialogm1" value="belgium"></v-radio>
                                <v-radio label="Belize" v-model="dialogm1" value="belize"></v-radio>
                                <v-radio label="Benin" v-model="dialogm1" value="benin"></v-radio>
                                <v-radio label="Bhutan" v-model="dialogm1" value="bhutan"></v-radio>
                                <v-radio label="Bolivia" v-model="dialogm1" value="bolivia"></v-radio>
                                <v-radio label="Bosnia and Herzegovina" v-model="dialogm1" value="bosnia"></v-radio>
                                <v-radio label="Botswana" v-model="dialogm1" value="botswana"></v-radio>
                                <v-radio label="Brazil" v-model="dialogm1" value="brazil"></v-radio>
                                <v-radio label="Brunei" v-model="dialogm1" value="brunei"></v-radio>
                                <v-radio label="Bulgaria" v-model="dialogm1" value="bulgaria"></v-radio>
                                <v-radio label="Burkina Faso" v-model="dialogm1" value="burkina"></v-radio>
                                <v-radio label="Burma" v-model="dialogm1" value="burma"></v-radio>
                                <v-radio label="Burundi" v-model="dialogm1" value="burundi"></v-radio>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                                <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-layout>
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
                dialogm1: '',
                dialog: false
            }
        }
    }
</script>