<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card class="" hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#11 Dark scheme</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        A list can assume the alternate scheme color of dark.
                    </blockquote>
                </v-card-text>
                <v-layout row>
                    <v-flex xs12 sm10 offset-sm1>
                        <v-card class="ma-3" dark>
                            <v-toolbar dark>
                                <v-toolbar-side-icon></v-toolbar-side-icon>
                                <v-toolbar-title>Inbox</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon>search</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-list two-line dark>
                                <template v-for="item in items">
                                    <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
                                    <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
                                    <v-list-tile avatar v-else v-bind:key="item.title">
                                        <v-list-tile-avatar>
                                            <img v-bind:src="item.avatar">
                                        </v-list-tile-avatar>
                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </template>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: ['theme'],
        data() {
            return {
                items: [
                    {header: 'Today'},
                    {
                        avatar: '/img/doc/lists/1.jpg',
                        title: 'Brunch this weekend?',
                        subtitle: "<span class='grey--text text--lighten-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: '/img/doc/lists/2.jpg',
                        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                        subtitle: "<span class='grey--text text--lighten-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend."
                    },
                    {divider: true, inset: true},
                    {
                        avatar: '/img/doc/lists/3.jpg',
                        title: 'Oui oui',
                        subtitle: "<span class='grey--text text--lighten-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?"
                    }
                ]
            }
        }
    }
</script>