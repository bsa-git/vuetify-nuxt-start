<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#3 Offset</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Offsets are useful for compensating for elements that may not be visible yet, or to control the
                        position of content. Just as with breakpoints, you can set an offset for any available sizes.
                    </blockquote>
                </v-card-text>
                <v-layout class="pa-3" row wrap>
                    <v-flex xs10 offset-xs1>
                        <v-card class="primary">
                            <v-card-text>xs10 offset-xs1</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs7 offset-xs5>
                        <v-card class="secondary">
                            <v-card-text>xs7 offset-xs5</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs5>
                        <v-card class="primary">
                            <v-card-text>xs5</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs5 offset-xs2>
                        <v-card class="primary">
                            <v-card-text>xs5 offset-xs2</v-card-text>
                        </v-card>
                    </v-flex>
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
    .layout .flex
        margin-bottom: 16px

    .card__text
        color: #fff
</style>