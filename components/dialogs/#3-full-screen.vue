<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#3 Fullscreen</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Due to limited space, full-screen dialogs may be more appropriate for mobile devices than
                        dialogs used on devices with larger screens.
                    </blockquote>
                </v-card-text>
                <v-layout row justify-center>
                    <v-dialog v-model="dialog" fullscreen transition="v-dialog-bottom-transition" :overlay=false>
                        <v-btn slot="activator" dark>Open Dialog</v-btn>
                        <v-card>
                            <v-toolbar light>
                                <v-btn icon="icon" @click.native="dialog = false" light>
                                    <v-icon>close</v-icon>
                                </v-btn>
                                <v-toolbar-title>Settings</v-toolbar-title>
                                <v-btn light flat @click.native="dialog = false">Save</v-btn>
                            </v-toolbar>
                            <v-list three-line subheader>
                                <v-subheader>User Controls</v-subheader>
                                <v-list-tile avatar>
                                    <v-list-tile-content>
                                        <v-list-tile-title>Content filtering</v-list-tile-title>
                                        <v-list-tile-sub-title>
                                            Set the content filtering level to restrict appts that can be downloaded
                                        </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile avatar>
                                    <v-list-tile-content>
                                        <v-list-tile-title>Password</v-list-tile-title>
                                        <v-list-tile-sub-title>
                                            Require password for purchase or use password to restrict purchase
                                        </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                            <v-divider></v-divider>
                            <v-list three-line subheader>
                                <v-subheader>General</v-subheader>
                                <v-list-tile avatar>
                                    <v-list-tile-action>
                                        <v-checkbox></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>Notifications</v-list-tile-title>
                                        <v-list-tile-sub-title>
                                            Notify me about updates to apps or games that I downloaded
                                        </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile avatar>
                                    <v-list-tile-action>
                                        <v-checkbox></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>Sound</v-list-tile-title>
                                        <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply
                                        </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile avatar>
                                    <v-list-tile-action>
                                        <v-checkbox></v-checkbox>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                                        <v-list-tile-sub-title>Automatically add home screen widgets
                                        </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
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