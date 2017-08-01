<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <tabs-mobile1 :theme="theme"></tabs-mobile1>
        <tabs-mobile2 :theme="theme"></tabs-mobile2>
        <tabs-mobile3 :theme="theme"></tabs-mobile3>
        <tabs-mobile4 :theme="theme"></tabs-mobile4>
        <tabs-mobile5 :theme="theme"></tabs-mobile5>
        <tabs-mobile6 :theme="theme"></tabs-mobile6>
        <tabs-mobile7 :theme="theme"></tabs-mobile7>
        <tabs-mobile8 :theme="theme"></tabs-mobile8>
        <tabs-mobile9 :theme="theme"></tabs-mobile9>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import TabsMobile1 from '~components/tabs/#1-toolbar.vue'
    import TabsMobile2 from '~components/tabs/#2-centered.vue'
    import TabsMobile3 from '~components/tabs/#3-content.vue'
    import TabsMobile4 from '~components/tabs/#4-with-search.vue'
    import TabsMobile5 from '~components/tabs/#5-icons.vue'
    import TabsMobile6 from '~components/tabs/#6-desktop.vue'
    import TabsMobile7 from '~components/tabs/#7-grow.vue'
    import TabsMobile8 from '~components/tabs/#8-pagination.vue'
    import TabsMobile9 from '~components/tabs/#9-disabled-scroll.vue'
    export default {
        components: {
            TabsMobile1,
            TabsMobile2,
            TabsMobile3,
            TabsMobile4,
            TabsMobile5,
            TabsMobile6,
            TabsMobile7,
            TabsMobile8,
            TabsMobile9
        },
        data() {
            return {
                title: 'Components - Tabs',
                description: 'The "v-tabs" component is used for hiding content behind a selectable item.',
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ],
                link: []
            }
        },
        fetch({store, error}) {
            try {
                store.commit('SET_THEME', 'comp')
            } catch (e) {
                error(e)
            }
        },
        computed: mapGetters({
            theme: 'getTheme'
        })
    }
</script>

<style lang="stylus" scoped>
    .layout
        margin-bottom: 16px
</style>