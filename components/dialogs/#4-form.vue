<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#4 Form</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Just a simple example of a form in a dialog.
                    </blockquote>
                </v-card-text>
                <v-layout row justify-center>
                    <v-dialog v-model="dialog">
                        <v-btn slot="activator" dark>Open Dialog</v-btn>
                        <v-card>
                            <v-card-title class="headline">User Profile</v-card-title>
                            <v-card-text>
                                <v-text-field label="Email" required></v-text-field>
                                <v-text-field label="Password" type="password" required></v-text-field>
                                <v-text-field label="Legal first name" required></v-text-field>
                                <v-text-field label="Legal middle name"
                                              hint="example of helper text only on focus"></v-text-field>
                                <v-text-field label="Legal last name" hint="example of persistent helper text"
                                              persistent-hint
                                              required
                                ></v-text-field>
                                <v-select
                                        label="Age"
                                        required
                                        :items="['0-17', '18-29', '30-54', '54+']"
                                ></v-select>
                                <small>*indicates required field</small>
                            </v-card-text>
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
                dialog: false
            }
        }
    }
</script>