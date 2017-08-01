<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#4 Order</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        You can control the ordering of grid items. As with offsets, you can set different orders for different sizes
                    </blockquote>
                </v-card-text>
                <v-container fluid>
                    <v-layout row>
                        <v-flex xs6 order-xs2>
                            <v-card class="primary">
                                <v-card-text>#1</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs6 order-xs1>
                            <v-card class="secondary">
                                <v-card-text>#2</v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4 order-md2 order-xs1>
                            <v-card class="primary">
                                <v-card-text>#1</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs4 order-md3 order-xs2>
                            <v-card class="secondary">
                                <v-card-text>#2</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs4 order-md1 order-xs3>
                            <v-card class="accent">
                                <v-card-text>#3</v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md3 order-md4 order-sm2>
                            <v-card class="primary">
                                <v-card-text>#1</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1>
                            <v-card class="secondary">
                                <v-card-text>#2</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md2 order-sm4>
                            <v-card class="accent">
                                <v-card-text>#3</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md1 order-sm3>
                            <v-card class="error">
                                <v-card-text>#4</v-card-text>
                            </v-card>
                        </v-flex>
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
    .layout .flex
        margin-bottom: 16px

    .card__text
        color: #fff
</style>