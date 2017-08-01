<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#1 Toolbar tabs</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        The <code>v-tabs</code> component is highly customizable to suit your needs. You can get and set
                        the currently active tab by using the <code>v-model</code> prop on the <code>v-tabs</code>
                        component.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-tabs dark v-model="active">
                        <v-tabs-bar slot="activators" class="secondary">
                            <v-tabs-item
                                    v-for="tab in tabs"
                                    :key="tab"
                                    :href="'#' + tab"
                                    ripple
                            >
                                Item {{ tab.slice(-1) }}
                            </v-tabs-item>
                            <v-tabs-slider class="yellow"></v-tabs-slider>
                        </v-tabs-bar>
                        <v-tabs-content
                                v-for="tab in tabs"
                                :key="tab"
                                :id="tab"
                        >
                            <v-card flat>
                                <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                        </v-tabs-content>
                    </v-tabs>

                    <div class="text-xs-center mt-3">
                        <v-btn @click.native="next">next tab</v-btn>
                    </div>
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
                tabs: ['tab-1', 'tab-2', 'tab-3'],
                active: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
                'nisi ut aliquip ex ea commodo consequat.'
            }
        },
        methods: {
            next() {
                this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
            }
        }
    }
</script>