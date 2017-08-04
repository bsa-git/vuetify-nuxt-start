<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card class="" hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#1 Basic</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        A card has 4 basic components, <code>v-card-media</code>, v-card-title, v-card-text and v-card-actions.
                    </blockquote>
                </v-card-text>
                <v-layout>
                    <v-flex xs12 sm8 offset-sm2>
                        <v-card>
                            <v-card-media src="/img/doc/cards/desert.jpg" height="200px">
                            </v-card-media>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat class="orange--text">Share</v-btn>
                                <v-btn flat class="orange--text">Explore</v-btn>
                            </v-card-actions>
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
        data () {
            return {
                card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, ' +
                'te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, ' +
                'no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ' +
                'ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
            }
        }
    }
</script>