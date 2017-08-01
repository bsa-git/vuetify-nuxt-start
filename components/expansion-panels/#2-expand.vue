<template>
    <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
            <v-card hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#2 Expand</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        Expand expansion panels will stay open until closed.
                    </blockquote>
                </v-card-text>
                <div class="ma-3">
                    <v-expansion-panel expand>
                        <v-expansion-panel-content v-for="(item,i) in 5" :key="i" v-bind:value="item === 2">
                            <div slot="header">Item</div>
                            <v-card>
                                <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
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
        ]
    }
</script>