<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card class="" hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#7 Card image with toolbar and list</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        A list can be combined with a card.
                    </blockquote>
                </v-card-text>
                <v-card>
                    <v-card-media src="/img/doc/lists/alison.jpeg" height="300px">
                        <v-layout column class="media">
                            <v-card-title>
                                <v-btn dark icon>
                                    <v-icon>chevron_left</v-icon>
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn dark icon class="mr-3">
                                    <v-icon>edit</v-icon>
                                </v-btn>
                                <v-btn dark icon>
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-spacer></v-spacer>
                            <v-card-title class="white--text pl-5 pt-5">
                                <div class="display-1 pl-5 pt-5">Ali Conners</div>
                            </v-card-title>
                        </v-layout>
                    </v-card-media>
                    <v-list two-line>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon class="indigo--text">phone</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                                <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon dark>chat</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-action></v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                                <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon dark>chat</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider inset></v-divider>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon class="indigo--text">mail</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                                <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-action></v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
                                <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider inset></v-divider>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon class="indigo--text">location_on</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>1400 Main Street</v-list-tile-title>
                                <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: ['theme']
    }
</script>