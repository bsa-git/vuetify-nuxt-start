<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card class="" hover raised>
                <v-toolbar :class="theme.base" dark>
                    <v-toolbar-title>#8 Title with sub-title, actions and action-text</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="body-2 secondary--text">
                    <blockquote>
                        A list can contain a stack within an action. Ripple and router props can be passed through
                        the main "v-list", to the "v-list-tile" or as a property in the items array.
                    </blockquote>
                </v-card-text>
                <v-list two-line>
                    <v-list-tile avatar ripple v-for="(item, index) in items" v-bind:key="item.title">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.headline }}</v-list-tile-sub-title>
                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                            <v-icon class="grey--text text--lighten-1">star_border</v-icon>
                        </v-list-tile-action>
                        <v-divider v-if="index + 1 < items.length"></v-divider>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: ['theme'],
        data () {
            return {
                items: [
                    { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
                    { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
                    { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: "Do you have Paris recommendations? Have you ever been?" },
                    { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: "Have any ideas about what we should get Heidi for her birthday?" },
                    { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
                ]
            }
        }
    }
</script>