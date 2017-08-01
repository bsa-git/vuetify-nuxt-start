<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card id="carousel-view-2" hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#2 Custom transition</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        You can also apply your own custom transition.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-carousel>
                        <v-carousel-item
                                v-for="(item,i) in items"
                                v-bind:key="i"
                                v-bind:src="item.src"
                                transition="v-fade-transition"
                                reverseTransition="v-fade-transition"
                        ></v-carousel-item>
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
                        src: '/images/doc/carousel/squirrel.jpg'
                    },
                    {
                        src: '/images/doc/carousel/sky.jpg'
                    },
                    {
                        src: '/images/doc/carousel/bird.jpg'
                    },
                    {
                        src: '/images/doc/carousel/planet.jpg'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #carousel-view-2
        .fade-transition
            &-enter-active, &-leave-active, &-leave-to
                transition: 2s ease-out
                position: absolute
                top: 0
                left: 0

            &-enter, &-leave, &-leave-to
                opacity: 0
</style>