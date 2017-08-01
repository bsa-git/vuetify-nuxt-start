<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#3 Horizontal cards</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Using <code>v-flex</code>, you can create customized horizontal cards. Use the to the <code>contain</code>
                        property
                        to shrink the <code>v-card-media</code> to fit inside the container, instead of covering.
                    </blockquote>
                </v-card-text>
                <v-container
                        fluid
                        style="min-height: 0;"
                        grid-list-lg
                >
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card class="blue-grey darken-2 white--text">
                                <v-card-title primary-title>
                                    <div class="headline">Unlimited music now</div>
                                    <div>
                                        Listen to your favorite artists and albums whenenver and wherever, online and offline.
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat dark>Listen now</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card class="cyan darken-2 white--text">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-flex xs7>
                                            <div>
                                                <div class="headline">Supermodel</div>
                                                <div>Foster the People</div>
                                            </div>
                                        </v-flex>
                                        <v-flex xs5>
                                            <v-card-media
                                                    src="/images/doc/cards/foster.jpg"
                                                    height="125px"
                                                    contain
                                            ></v-card-media>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card class="purple white--text">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-flex xs7>
                                            <div>
                                                <div class="headline">Halycon Days</div>
                                                <div>Ellie Goulding</div>
                                            </div>
                                        </v-flex>
                                        <v-flex xs5>
                                            <v-card-media
                                                    src="/images/doc/cards/halcyon.png"
                                                    height="125px"
                                                    contain
                                            ></v-card-media>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
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