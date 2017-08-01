<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#8 Time pickers - In dialog and menu</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <v-menu
                                    lazy
                                    :close-on-content-click="false"
                                    v-model="menu2"
                                    transition="v-scale-transition"
                                    offset-y
                                    :nudge-left="40"
                            >
                                <v-text-field
                                        slot="activator"
                                        label="Picker in menu"
                                        v-model="e6"
                                        prepend-icon="access_time"
                                        readonly
                                ></v-text-field>
                                <v-time-picker v-model="e6"></v-time-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-dialog
                                    persistent
                                    v-model="modal2"
                                    lazy
                            >
                                <v-text-field
                                        slot="activator"
                                        label="Picker in dialog"
                                        v-model="e6"
                                        prepend-icon="access_time"
                                        readonly
                                ></v-text-field>
                                <v-time-picker v-model="e6" actions>
                                    <template scope="{ save, cancel }">
                                        <v-card-actions>
                                            <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                                            <v-btn flat primary @click.native="save()">Save</v-btn>
                                        </v-card-actions>
                                    </template>
                                </v-time-picker>
                            </v-dialog>
                        </v-flex>
                    </v-layout>
                </v-container>
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
        data () {
            return {
                e6: null,
                menu2: false,
                modal2: false,
            }
        }
    }
</script>