<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#5 Custom actions</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        With a simple conditional, you can easily add supplementary text that is hidden until opened.
                    </blockquote>
                </v-card-text>
                <v-layout row>
                    <v-flex xs12 sm8 offset-sm2>
                        <v-card>
                            <v-card-media
                                    src="/img/doc/cards/sunshine.jpg"
                                    height="200px"
                            >
                            </v-card-media>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">Top western road trips</div>
                                    <span class="grey--text">1,000 miles of wonder</span>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat>Share</v-btn>
                                <v-btn flat class="purple--text">Explore</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn icon @click.native="show = !show">
                                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-slide-y-transition>
                                <v-card-text v-show="show">
                                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                </v-card-text>
                            </v-slide-y-transition>
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
        ],
        data: () => ({
            show: false
        })
    }
</script>