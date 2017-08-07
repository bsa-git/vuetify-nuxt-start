<template>
    <v-toolbar :class="[theme.base,  'darken-3']" dark fixed>
        <v-toolbar-side-icon class="white--text" @click.native.stop="onNavLeft"></v-toolbar-side-icon>
        <v-btn
                class="white--text"
                v-if="config.ui.nav_left_mini.show"
                icon
                @click.native.stop="onNavLeftMini"
        >
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-btn
                class="white--text"
                v-if="config.ui.nav_left_clipped.show"
                icon
                @click.native.stop="onNavLeftClipped"
        >
            <v-icon>web</v-icon>
        </v-btn>
        <v-btn
                class="white--text"
                v-if="config.ui.footer_fixed.show"
                icon
                @click.native.stop="onFooterFixed"
        >
            <v-icon>remove</v-icon>
        </v-btn>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <v-menu id="marriot" bottom left origin="top right">
                <v-btn icon="icon" slot="activator" class="white--text">
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                    <v-subheader>Documentation</v-subheader>
                    <v-divider></v-divider>
                    <v-list-tile
                            target="_blank"
                            to="https://vuetifyjs.com/vuetify/quick-start"
                    >
                        <v-list-tile-title>Vuetify.js Quick-Start</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile
                            target="_blank"
                            to="https://nuxtjs.org/guide"
                    >
                        <v-list-tile-title>Nuxt.js Guide</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile
                            target="_blank"
                            to="https://vuejs.org/"
                    >
                        <v-list-tile-title>Vue.js Guide</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </div>
        <v-btn
                v-if="config.ui.nav_right.show"
                icon
                @click.native.stop="onNavRight"
        >
            <v-icon>menu</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        props: [
            'title'
        ],
        data () {
            return {
                miniVariant: false
            }
        },
        computed: mapGetters({
            theme: 'getTheme',
            config: 'getConfig'
        }),
        methods: {
            onNavLeft: function () {
                this.$emit('onNavLeft')
            },
            onNavRight: function () {
                this.$emit('onNavRight')
            },
            onNavLeftMini: function () {
                this.miniVariant = !this.miniVariant
                this.$emit('onNavLeftMini')
            },
            onNavLeftClipped: function () {
                this.$emit('onNavLeftClipped')
            },
            onFooterFixed: function () {
                this.$emit('onFooterFixed')
            }
        }
    }
</script>