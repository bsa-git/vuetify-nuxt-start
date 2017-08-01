<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#5 Icons</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        By using the <code>icons</code> prop you can add icons to each tab item.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-tabs dark fixed icons centered>
                        <v-tabs-bar slot="activators" class="secondary">
                            <v-tabs-slider class="yellow"></v-tabs-slider>
                            <v-tabs-item href="#tab-1">
                                <v-icon>phone</v-icon>
                                Recents
                            </v-tabs-item>
                            <v-tabs-item href="#tab-2">
                                <v-icon>favorite</v-icon>
                                Favorites
                            </v-tabs-item>
                            <v-tabs-item href="#tab-3">
                                <v-icon>account_box</v-icon>
                                Nearby
                            </v-tabs-item>
                        </v-tabs-bar>
                        <v-tabs-content
                                v-for="i in 3"
                                :key="i"
                                :id="'tab-' + i"
                        >
                            <v-card flat>
                                <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                        </v-tabs-content>
                    </v-tabs>
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
        data() {
            return {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
                'nisi ut aliquip ex ea commodo consequat.'
            }
        }
    }
</script>