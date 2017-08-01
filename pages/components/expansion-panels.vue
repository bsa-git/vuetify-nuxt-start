<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <panel-accordion :theme="theme"></panel-accordion>
        <panel-expand :theme="theme"></panel-expand>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PanelAccordion from '~components/expansion-panels/#1-accordion.vue'
    import PanelExpand from '~components/expansion-panels/#2-expand.vue'
    export default {
        components: {
            PanelAccordion,
            PanelExpand
        },
        data() {
            return {
                title: 'Components - Expansion panels',
                description: 'The "v-expansion-panel" component is useful for reducing vertical space with large amounts of information.',
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