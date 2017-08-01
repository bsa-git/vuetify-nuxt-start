<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <layout-container :theme="theme"></layout-container>
        <layout-grid :theme="theme"></layout-grid>
        <layout-offset :theme="theme"></layout-offset>
        <layout-order :theme="theme"></layout-order>
        <layout-direction-align :theme="theme"></layout-direction-align>
        <layout-row-column :theme="theme"></layout-row-column>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import LayoutGrid from '~components/layout/grid.vue'
    import LayoutContainer from '~components/layout/container.vue'
    import LayoutOffset from '~components/layout/offset.vue'
    import LayoutOrder from '~components/layout/order.vue'
    import LayoutDirectionAlign from '~components/layout/direction-align.vue'
    import LayoutRowColumn from '~components/layout/row-column.vue'
    export default {
        components: {
            LayoutGrid,
            LayoutContainer,
            LayoutOffset,
            LayoutOrder,
            LayoutDirectionAlign,
            LayoutRowColumn
        },
        data() {
            return {
                title: 'Layout - PreDefined',
                description: 'The layout system is the heart of every application.',
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
                store.commit('SET_THEME', 'layout')
            } catch (e) {
                error(e)
            }
        },
        computed: mapGetters({
            theme: 'getTheme'
        })
    }
</script>