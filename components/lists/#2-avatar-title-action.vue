<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card class="" hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#2 Avatar with title and action</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Lists also contain slots for a more explicit approach. If you choose this approach, remember you
                        must provide additional props for correct spacing. In this example, we have a tile with an avatar,
                        so we must provide an "avatar" property.
                    </blockquote>
                </v-card-text>
                <v-list>
                    <v-list-tile avatar v-for="item in items" v-bind:key="item.title">
                        <v-list-tile-action>
                            <v-icon v-if="item.icon" class="pink--text">star</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-avatar>
                            <img v-bind:src="item.avatar"/>
                        </v-list-tile-avatar>
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
                    { icon: true, title: 'Jason Oner', avatar: '/img/doc/lists/1.jpg' },
                    { title: 'Travis Howard', avatar: '/img/doc/lists/2.jpg' },
                    { title: 'Ali Connors', avatar: '/img/doc/lists/3.jpg' },
                    { title: 'Cindy Baker', avatar: '/img/doc/lists/4.jpg' },
                ]
            }
        }
    }
</script>