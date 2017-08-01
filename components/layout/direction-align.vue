<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#5 Direction and Align</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Designate the direction and alignment in a variety of ways.
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout class="mb-3" row justify-space-between>
                        <v-card class="primary">
                            <v-card-text>one</v-card-text>
                        </v-card>
                        <v-card class="secondary">
                            <v-card-text>two</v-card-text>
                        </v-card>
                        <v-card class="accent">
                            <v-card-text>three</v-card-text>
                        </v-card>
                    </v-layout>
                    <v-layout row justify-space-around>
                        <v-card class="primary">
                            <v-card-text>one</v-card-text>
                        </v-card>
                        <v-card class="secondary">
                            <v-card-text>two</v-card-text>
                        </v-card>
                        <v-card class="accent">
                            <v-card-text>three</v-card-text>
                        </v-card>
                    </v-layout>
                </v-container>
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