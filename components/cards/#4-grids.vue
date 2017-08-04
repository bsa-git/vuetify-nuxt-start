<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#5 Grids</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Using grid lists, you can create beautiful layouts.
                    </blockquote>
                </v-card-text>
                <v-container fluid grid-list-md class="grey lighten-4">
                    <v-layout row wrap>
                        <v-flex
                                v-bind="{ [`xs${card.flex}`]: true }"
                                v-for="card in cards"
                                :key="card.title"
                        >
                            <v-card>
                                <v-card-media
                                        :src="card.src"
                                        height="200px"
                                >
                                    <v-container fill-height fluid>
                                        <v-layout fill-height>
                                            <v-flex xs12 align-end flexbox>
                                                <span class="headline white--text" v-text="card.title"></span>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-media>
                                <v-card-actions class="white">
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon>favorite</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon>bookmark</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon>share</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
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
        data: () => ({
            cards: [
                {title: 'Pre-fab homes', src: '/img/doc/cards/house.jpg', flex: 12},
                {title: 'Favorite road trips', src: '/img/doc/cards/road.jpg', flex: 6},
                {title: 'Best airlines', src: '/img/doc/cards/plane.jpg', flex: 6}
            ]
        })
    }
</script>