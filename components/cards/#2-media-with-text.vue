<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#2 Media with text</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Using the layout system, we can add custom text anywhere within the background.
                    </blockquote>
                </v-card-text>
                <v-layout>
                    <v-flex xs12 sm8 offset-sm2>
                        <v-card>
                            <v-card-media
                                    class="white--text"
                                    height="200px"
                                    src="/img/doc/cards/docks.jpg"
                            >
                                <v-container fill-height fluid>
                                    <v-layout fill-height>
                                        <v-flex xs12 align-end flexbox>
                                            <span class="headline">Top 10 Australian beaches</span>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-media>
                            <v-card-title>
                                <div>
                                    <span class="grey--text">Number 10</span><br>
                                    <span>Whitehaven Beach</span><br>
                                    <span>Whitsunday Island, Whitsunday Islands</span>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat class="orange--text">Share</v-btn>
                                <v-btn flat class="orange--text">Explore</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
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
        ]
    }
</script>

<style lang="stylus" scoped>
    .portrait
        .card__row--actions
            background: rgba(0, 0, 0, .25)
</style>