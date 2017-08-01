<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#2 Grid</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        The "v-layout" is used for separating sections and contains the "v-flex". The structure of your layout will be as follows, "v-layout" » "v-flex".
                    </blockquote>
                </v-card-text>
                <v-layout class="pa-3" row wrap>
                    <v-flex xs12>
                        <v-card class="primary">
                            <v-card-text>12</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 v-for="i in 2" :key="i">
                        <v-card class="secondary">
                            <v-card-text>6</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs4 v-for="i in 3" :key="i">
                        <v-card class="primary">
                            <v-card-text>4</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs3 v-for="i in 4" :key="i">
                        <v-card class="secondary">
                            <v-card-text>3</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs2 v-for="i in 6" :key="i">
                        <v-card class="primary">
                            <v-card-text>2</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1 v-for="i in 12" :key="i">
                        <v-card class="secondary">
                            <v-card-text>1</v-card-text>
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