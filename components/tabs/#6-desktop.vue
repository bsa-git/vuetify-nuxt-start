<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#6 Desktop tabs</v-toolbar-title>
                </v-toolbar>
                <div class="ma-3">
                    <v-tabs fixed light centered>
                        <v-toolbar class="grey lighten-4" light>
                            <v-toolbar-side-icon></v-toolbar-side-icon>
                            <v-toolbar-title>Page title</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>search</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-tabs-bar slot="activators" class="grey lighten-4">
                            <v-tabs-slider class="primary"></v-tabs-slider>
                            <v-tabs-item href="#mobile-tabs-5-1" class="primary--text">
                                <v-icon>phone</v-icon>
                            </v-tabs-item>
                            <v-tabs-item href="#mobile-tabs-5-2" class="primary--text">
                                <v-icon>favorite</v-icon>
                            </v-tabs-item>
                            <v-tabs-item href="#mobile-tabs-5-3" class="primary--text">
                                <v-icon>account_box</v-icon>
                            </v-tabs-item>
                        </v-tabs-bar>
                        <v-tabs-content
                                v-for="i in 3"
                                :key="i"
                                :id="'mobile-tabs-5-' + i"
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