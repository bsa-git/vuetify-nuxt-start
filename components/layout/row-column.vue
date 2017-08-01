<template>
    <v-layout class="mt-3" row wrap>
        <v-flex xs12>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#6 Row and column based on breakpoint</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Dynamically change your layout based upon resolution. (resize your screen and watch the layout change on small breakpoints)
                    </blockquote>
                </v-card-text>
                <v-layout class="pa-3" row-sm column child-flex-sm>
                    <v-card class="primary ma-1">
                        <v-card-text>one</v-card-text>
                    </v-card>
                    <v-card class="secondary ma-1">
                        <v-card-text>two</v-card-text>
                    </v-card>
                    <v-card class="accent ma-1">
                        <v-card-text>three</v-card-text>
                    </v-card>
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: ['theme']
    }
</script>

<style lang="stylus" scoped>
    .card__text
        color: #fff
</style>