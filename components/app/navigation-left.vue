<template>
    <v-navigation-drawer
            :dark="color_theme === 'dark'"
            persistent
            enable-resize-watcher
            overflow
            :mini-variant.sync="miniVariant"
            :clipped="clipped"
            v-model="compDrawer"
    >
        <v-list>
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar tag="div">
                        <v-list-tile-avatar>
                            <img :src="logo_img"/>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title
                                    :class="['headline', color_theme === 'dark' ? 'exotic--dark' : 'exotic--light']">
                                {{ logo_title }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon router to="/">
                                <v-icon>home</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <template v-for="(item, i) in items">
                <v-list-group v-if="item.children && !miniVariant">
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon>{{ item.action }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile v-for="(child, i) in item.children" :key="i"
                                 router
                                 :to="child.to"
                    >
                        <v-list-tile-content>
                            <v-list-tile-title>{{ child.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>

                </v-list-group>
                <v-list-tile v-else
                             router
                             :to="item.to"
                >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ item.title }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        props: [
            'logo_title',
            'logo_icon',
            'logo_img',
            'miniVariant',
            'clipped',
            'drawer',
            'color_theme'
        ],
        data() {
            return {
                items: [
                    {icon: 'apps', title: 'Welcome', to: '/'},
                    {icon: 'dashboard', title: 'Layout', to: '/components/layout'},
                    {
                        action: 'web',
                        title: 'Components',
                        children: [
                            {icon: 'list', title: 'Lists', to: '/components/lists'},
                            {icon: 'payment', title: 'Cards', to: '/components/cards'},
                            {icon: 'recent_actors', title: 'Carousels', to: '/components/carousels'},
                            {icon: 'view_day', title: 'Expansion panels', to: '/components/expansion-panels'},
                            {icon: 'message', title: 'Dialogs', to: '/components/dialogs'},
                            {icon: 'tab', title: 'Tabs', to: '/components/tabs'},
                            {icon: 'directions_walk', title: 'Steppers', to: '/components/steppers'},
                            {icon: 'view_module', title: 'Data tables', to: '/components/data-tables'},
                            {icon: 'today', title: 'Date/Time Pickers', to: '/components/pickers'},
                            {icon: 'format_indent_increase', title: 'Text fields', to: '/components/text-fields'},
                            {icon: 'assignment', title: 'Forms', to: '/components/forms'}
                        ]
                    },
                    {
                        action: 'alarm',
                        title: 'Warnings',
                        children: [
                            {icon: 'alarm_add', title: 'Error-404', to: '/warnings/emit-error'},
                            {icon: 'alarm_on', title: 'Error-500', to: '/warnings/emit-error-fetch'},
                            {icon: 'build', title: 'Maintenance', to: '/warnings/maintenance'}
                        ]
                    }
                ]
            }

        },
        computed: {
            compDrawer: {
                // Getter:
                get: function () {
                    return this.drawer
                },
                // Setter:
                set: function (newValue) {
                    this.$emit('onNavLeft', newValue)
                }
            },
            ...mapGetters({
                theme: 'getTheme'
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .subheader
        height: 100px

    .subheader .btn
        height: initial !important
</style>