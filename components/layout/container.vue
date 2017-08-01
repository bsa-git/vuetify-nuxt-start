<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card class="" hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#1 Container</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        The "v-container" can be used for a center focused page, or given the "fluid" prop to extend its full width.
                    </blockquote>
                </v-card-text>
                <v-container>
                    <v-card class="primary">
                        <v-card-text>12</v-card-text>
                    </v-card>
                    <v-card class="secondary">
                        <v-card-text>6</v-card-text>
                    </v-card>
                    <v-card class="primary">
                        <v-card-text>4</v-card-text>
                    </v-card>
                    <v-card class="secondary">
                        <v-card-text>3</v-card-text>
                    </v-card>
                    <v-card class="primary">
                        <v-card-text>2</v-card-text>
                    </v-card>
                    <v-card class="secondary">
                        <v-card-text>1</v-card-text>
                    </v-card>
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
    .container .card
        margin-bottom: 16px

    .card__text
        color: #fff
</style>