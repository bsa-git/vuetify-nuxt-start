<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card class="" hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#5 Avatar with title and action</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        When a lists slot is used, you must manually define whether it contains headers,
                        or if the items contain an avatar. This is required to maintain proper spacing.
                    </blockquote>
                </v-card-text>
                <v-list subheader>
                    <v-subheader>Recent chat</v-subheader>
                    <v-list-tile avatar v-for="item in items" v-bind:key="item.title">
                        <v-list-tile-avatar>
                            <img v-bind:src="item.avatar"/>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon v-bind:class="[item.active ? 'teal--text' : 'grey--text']">chat_bubble</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
                <v-divider></v-divider>
                <v-list subheader>
                    <v-subheader>Previous chats</v-subheader>
                    <v-list-tile avatar v-for="item in items2" v-bind:key="item.title">
                        <v-list-tile-avatar>
                            <img v-bind:src="item.avatar"/>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: ['theme'],
        data () {
            return {
                items: [
                    { active: true, title: 'Jason Oner', avatar: '/img/doc/lists/1.jpg' },
                    { active: true, title: 'Ranee Carlson', avatar: '/img/doc/lists/2.jpg' },
                    { title: 'Cindy Baker', avatar: '/img/doc/lists/3.jpg' },
                    { title: 'Ali Connors', avatar: '/img/doc/lists/4.jpg' },
                ],
                items2: [
                    { title: 'Travis Howard', avatar: '/img/doc/lists/5.jpg' },
                ]
            }
        }
    }
</script>