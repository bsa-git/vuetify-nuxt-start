<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#4 With search</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Here is another example of additional content inside the <code>v-tabs</code> component.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-tabs dark fixed centered>
                        <v-toolbar class="secondary white--text">
                            <v-text-field
                                    solo
                                    label=""
                                    append-icon="keyboard_voice"
                                    prepend-icon="search"
                            ></v-text-field>
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
        data() {
            return {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
                'nisi ut aliquip ex ea commodo consequat.'
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .tabs__slider
        background: #ffc107
</style>