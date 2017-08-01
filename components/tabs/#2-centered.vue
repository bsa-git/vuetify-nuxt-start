<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#2 Centered tabs</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Tabs can be centered by using the <code>centered</code> prop. Here we have also applied the
                        <code>fixed</code> prop which gives all tab items a fixed size, regardless of content.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-tabs dark fixed centered>
                        <v-tabs-bar slot="activators" class="secondary">
                            <v-tabs-slider class="yellow"></v-tabs-slider>
                            <v-tabs-item
                                    v-for="i in items"
                                    :key="i"
                                    :href="'#tab-' + i"
                            >
                                {{ i }}
                            </v-tabs-item>
                        </v-tabs-bar>
                        <v-tabs-content
                                v-for="i in items"
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
                items: ['Item One', 'Item Seventeen', 'Item Five'],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                'ut aliquip ex ea commodo consequat.'
            }
        }
    }
</script>