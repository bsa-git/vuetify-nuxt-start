<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#9 Disabled scroll</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        You can disable the pagination controls by setting the <code>scrollable</code> prop to <code>false</code>.
                        This also has the effect of removing the margins around the tab item container.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-tabs dark :scrollable="false">
                        <v-tabs-bar slot="activators" class="secondary">
                            <v-tabs-slider class="yellow"></v-tabs-slider>
                            <v-tabs-item
                                    v-for="i in 5"
                                    :key="i"
                                    :href="'#tab-' + i"
                            >
                                Item {{ i }}
                            </v-tabs-item>
                            <v-menu>
                                <v-tabs-item slot="activator">
                                    Menu
                                    <v-icon>arrow_drop_down</v-icon>
                                </v-tabs-item>
                                <v-list v-for="n in 4" v-bind:key="n">
                                    <v-list-tile href="javascript:;">Item {{ n }}</v-list-tile>
                                </v-list>
                            </v-menu>
                        </v-tabs-bar>
                        <v-tabs-content
                                v-for="i in 5"
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
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                'ut aliquip ex ea commodo consequat.'
            }
        }
    }
</script>