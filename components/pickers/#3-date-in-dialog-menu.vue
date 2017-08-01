<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#3 Date pickers - In dialog and menu</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        When integrating a picker into a <code>v-text-field</code>, it is recommended to use the <code>readonly</code>
                        prop.
                        This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.
                        <br/>
                        Pickers expose a scoped slot that allow you to hook into save and cancel functionality.
                        This will maintain an old value which can be replaced if the user cancels.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <v-menu
                                    lazy
                                    :close-on-content-click="false"
                                    v-model="menu"
                                    transition="v-scale-transition"
                                    offset-y
                                    :nudge-left="40"
                            >
                                <v-text-field
                                        slot="activator"
                                        label="Picker in menu"
                                        v-model="e3"
                                        prepend-icon="event"
                                        readonly
                                ></v-text-field>
                                <v-date-picker v-model="e3" no-title scrollable actions>
                                    <template scope="{ save, cancel }">
                                        <v-card-actions>
                                            <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                                            <v-btn flat primary @click.native="save()">Save</v-btn>
                                        </v-card-actions>
                                    </template>
                                </v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-dialog
                                    persistent
                                    v-model="modal"
                                    lazy
                            >
                                <v-text-field
                                        slot="activator"
                                        label="Picker in dialog"
                                        v-model="e3"
                                        prepend-icon="event"
                                        readonly
                                ></v-text-field>
                                <v-date-picker v-model="e3" scrollable>
                                    <template scope="{ save, cancel }">
                                        <v-card-actions>
                                            <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                                            <v-btn flat primary @click.native="save()">Save</v-btn>
                                        </v-card-actions>
                                    </template>
                                </v-date-picker>
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
                e3: null,
                menu: false,
                modal: false
            }
        }
    }
</script>