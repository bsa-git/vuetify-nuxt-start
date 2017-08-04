<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card id="carousel-view-1" hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#1 Default</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        A carousel by default has a slide transition.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-carousel>
                        <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
                    </v-carousel>
                </div>
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
                items: [
                    {
                        src: '/img/doc/carousel/squirrel.jpg'
                    },
                    {
                        src: '/img/doc/carousel/sky.jpg'
                    },
                    {
                        src: '/img/doc/carousel/bird.jpg'
                    },
                    {
                        src: '/img/doc/carousel/planet.jpg'
                    }
                ]
            }
        }
    }
</script>