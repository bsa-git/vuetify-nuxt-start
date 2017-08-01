<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#3 Content</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Tabs are not the only thing you can put inside the <code>v-tabs</code> component. In this example we've also
                        added a toolbar.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-tabs dark fixed centered>
                        <v-toolbar extended class="secondary" dark>
                            <v-toolbar-side-icon></v-toolbar-side-icon>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>search</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                            <v-toolbar-title slot="extension" class="display-2">Page title</v-toolbar-title>
                        </v-toolbar>
                        <v-tabs-bar slot="activators" class="secondary">
                            <v-tabs-slider class="yellow"></v-tabs-slider>
                            <v-tabs-item
                                    v-for="i in 3"
                                    :key="i"
                                    :href="'#tab-' + i"
                            >
                                Item {{ i }}
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
        data () {
            return {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
                'nisi ut aliquip ex ea commodo consequat.'
            }
        }
    }
</script>